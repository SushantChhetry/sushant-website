'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

async function getImagesFromGitHub(): Promise<string[]> {
  const repoOwner: string = "SushantChhetry"; // Replace with your GitHub username or the repository owner's username
  const repoName: string = "sushant-chhetry-art"; // Replace with your repository's name
  const path: string = "artwork"; // Replace with the path to the directory you want to retrieve

  const response = await axios.get(
    `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`
  );

  if (response.status === 200) {
    // Extract image URLs from the response data
    const imageUrls: string[] = response.data.map(
      (item: any) => item.download_url
    );
    return imageUrls;
  }

  return [];
}

function ImageGallery(): JSX.Element {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const urls: string[] = await getImagesFromGitHub();
      setImageUrls(urls);
    }
    fetchImages();
  }, []);

  // Render your image gallery using the retrieved image URLs
  return (
    <div className="flex flex-wrap">
      {imageUrls.map((url: string) => (
        <div key={url} className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <Image
            src={url}
            alt="GitHub Image"
            layout="responsive"
            width={800} // Adjust these values to your layout needs
            height={600} // Adjust these values to your layout needs
          />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
