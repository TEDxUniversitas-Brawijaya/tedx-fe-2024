"use client"

import { forwardRef, useRef, useState } from "react";
import { Input } from "@/components/shared/input";
import { FileIcon } from "lucide-react";
import { Separator } from "@/components/shared/separator";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useMergeRefs } from "@/hooks/useMergeRefs";

interface FileInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
  > {
  onChange?: (url: string) => void;
  value?: string;
  error?: boolean;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, onChange, disabled, error, value, ...props }, ref) => {
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { toast } = useToast();
    const mergedRef = useMergeRefs(fileInputRef, ref);

    const resetFileInput = () => {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    const simulateUpload = async (file: File): Promise<string> => {
      // Uncomment for simulating failed API call
      // throw Error('upload failed')

      await new Promise((resolve) => setTimeout(resolve, 2000));
      return `https://placeholder-url.com/${file.name}`;
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setIsUploading(true);

      try {
        const url = await simulateUpload(file);
        onChange?.(url);
      } catch (error) {
        console.error("Upload failed:", error);
        resetFileInput();
        toast({
          variant: "destructive",
          title: "Gagal upload file",
          description: "Silahkan coba upload file kembali",
        });
      } finally {
        setIsUploading(false);
      }
    };

    return (
      <div className="relative">
        <Input
          type="file"
          onChange={handleFileChange}
          disabled={disabled || isUploading}
          className={cn("cursor-pointer pl-24 file:hidden", className)}
          ref={mergedRef}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pb-0 pl-2 pt-[0.1rem] text-[#7E7E7E] md:pb-[0.1rem] md:pt-0">
          <FileIcon className="mr-2 h-4 w-4" />
          <p className="text-base leading-[1rem] md:text-sm">Upload</p>
          <Separator
            orientation="vertical"
            className={`${isUploading ? "bg-gray-400 opacity-50" : "bg-gray-300 opacity-100"} ml-2 transition-colors`}
          />
        </div>
      </div>
    );
  },
);

FileInput.displayName = "FileInput";

export { FileInput };
