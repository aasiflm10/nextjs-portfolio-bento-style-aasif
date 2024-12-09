import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site-config";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full flex-1 gap-8">
      {/* Left side */}
      <div className="h-full max-w-md flex-1 p-6">
        <div className="flex h-full flex-col space-y-6 rounded-md">
          {/* Avatar */}
          <Image
            alt="Avatar"
            priority
            loading="eager"
            src="/AasifClg.png"
            width="120"
            height="120"
          />

          {/* Content Container */}
          <div>
            {/* Title */}
            <div className="text-xl font-semibold text-primary">
              {siteConfig.title}
            </div>
            {/* Full Name */}
            <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
            {/* Bio */}
            <p className="text-2xl font-light text-neutral-500">
              {siteConfig.bio}
            </p>
          </div>

          {/* Buttons */}
          <div>
            <a className="flex gap-2 items-center border-neutral-700 dark:border-neutral-300">
              <MapPin size={16}/>
              {siteConfig.location}
            </a>
          </div>

          {/* Footer */}
          <div></div>
        </div>
      </div>
      <div className="h-full flex-1 p-6">
        <div className="flex h-full items-center justify-center rounded-md bg-red-400">
          Left side
        </div>
      </div>
    </main>
  );
}
