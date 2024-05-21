import { formatDistanceToNow } from 'date-fns';

function NotifyTime({notificationData}){
    const time = notificationData?.created_at
   const timeAgo = formatDistanceToNow(new Date(time), { addSuffix: true });
    return <small>{timeAgo}</small>
}

export default NotifyTime