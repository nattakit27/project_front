import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserHome() {
  const [imageIndex, setImageIndex] = useState(0);

  const imageUrls = [
    'https://media.discordapp.net/attachments/1112599338401673279/1208395737323544647/bd371dc3211b07d4.png?ex=65e3213a&is=65d0ac3a&hm=fed2091a53dfbfdf184634f3eb727d9fd2e77f65ff5a65bc46e257a249052f6c&=&format=webp&quality=lossless&width=967&height=545',
    'https://petmaya.com/wp-content/uploads/2014/11/funny-cat-01.jpg',
    'https://pbs.twimg.com/media/D-18FlqVAAAqqKe.jpg',
    // เพิ่มลิงก์รูปภาพอื่น ๆ ตามต้องการ
  ];

  const handleClick = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imageUrls.length]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="text-white mb-4">UserHome</div>
      <div className="flex-grow">
        <img
          src={imageUrls[imageIndex]}
          alt="User Image"
          className="rounded-none object-cover h-screen w-full"
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
      {/* ข้อมูลอื่น ๆ ที่คุณต้องการแสดง */}
    </div>
  );
  }  