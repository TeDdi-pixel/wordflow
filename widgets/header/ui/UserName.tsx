import {getUserName} from "@/shared/lib/user/getUserName";
import {getUserId} from "@/shared/lib/session";


export const UserName = async () => {
    const userId = await getUserId()
    const userName = await getUserName(userId)
    return <p className="flex group-hover:text-accent-text transition-colors">
        {userName}
    </p>
};
