"use client";

import { showError } from "@/shared/lib/toasts";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getLikeStatus } from "../api/getLikeStatus";
import { deleteLike } from "../api/deleteLike";
import { addLike } from "../api/addLike";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { useLikesStore } from "@/shared/store/useLikesStore";

const useLike = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const params = useParams();
  const unitSetId = params.unitSetId as string;
  const router = useRouter();

  const setLikesCounts = useLikesStore((state) => state.setLikesCounts);

  const handleClick = async () => {
    if (!isReady || isLoading) return;
    setIsLoading(true);

    const prevLiked = liked;
    setLiked(!prevLiked);

    try {
      if (prevLiked) {
        const newLikesCount = await deleteLike(unitSetId);
        setLikesCounts(unitSetId, newLikesCount);
      } else {
        const newLikesCount = await addLike(unitSetId);
        setLikesCounts(unitSetId, newLikesCount);
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
        const status = await getLikeStatus(unitSetId);
        if (status.ok) {
          setLiked(status.liked);
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
