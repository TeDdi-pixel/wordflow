"use client";

import LoadingText from "@/shared/components/LoadingText";
import { showError } from "@/shared/lib/toasts";
import axios, { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useLike = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const params = useParams();
  const unitSetId = params.unitSetId;
  const router = useRouter();

  const handleClick = async () => {
    if (!isReady || isLoading) return;
    setIsLoading(true);

    const prevLiked = liked;
    setLiked(!prevLiked);

    try {
      if (prevLiked) {
        toast.promise(axios.delete(`/api/unit-sets/${unitSetId}/like`), {
          loading: <LoadingText text="Завантаження..." />,
          success: "Юніт успішно збережений",
        });
      } else {
        toast.promise(axios.post(`/api/unit-sets/${unitSetId}/like`), {
          loading: <LoadingText text="Завантаження..." />,
          success: "Юніт успішно видалений",
        });
      }
    } catch (error) {
      setLiked(prevLiked);
      if (error instanceof AxiosError) {
        console.error(error);
        const message = error.response?.data?.message || error.message;
        showError(message);
        if (error.response?.status === 401) {
          router.push("/login");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const checkForLike = async () => {
      try {
        const res = await axios.get(`/api/unit-sets/${unitSetId}/like`);
        if (res.data.ok) {
          setLiked(res.data.liked);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsReady(true);
      }
    };

    if (unitSetId) checkForLike();
  }, [unitSetId]);

  return { handleClick, liked, isReady, isLoading };
};

export default useLike;
