'use client';
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CardHeader, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Variable } from "lucide-react"
import { fetchFilesData } from "@/lib/actions/drive.action";
import { currentUser } from "@clerk/nextjs";

export default function DriveSection() {

  const [files, setFiles] = useState([]);

  



try {
  useEffect(() => {
  fetchFilesData().then((data) => {
    setFiles(data);
  });
  }, []);
  
} catch (error) {
  console.log(error);
  
}


  

  

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your Personal Cloud Storage
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Securely store, manage and share all your files, photos and documents with 10GB of free cloud storage
                from our Service.
              </p>
            </div>
            <div className="flex justify-between items-center bg-white p-4 rounded-md shadow-sm">
              <div className="flex items-center space-x-2">
                <Avatar className="w-12 h-12" size="md" />
                <div>
                  <h2 className="font-semibold text-gray-900">Shashwat</h2>
                  <p className="text-sm text-gray-500">Storage: 2GB / 10GB</p>
                </div>
              </div>
              <Badge color="bg-[#E95793]">8GB Available</Badge>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card className="p-4 space-y-4">
              <CardHeader className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Your Files</h3>
                <Input className="bg-[#E95793] text-white" id="file" type="file" />
              </CardHeader>
              <div className="space-y-2">
                {files.length > 0 && files.map((file, index) => (
                  <div className="flex justify-between items-center" key={index}>
                    <p>{file.fileName}</p>
                    <Button
                      className="bg-[#E95793] text-white"
                      variant="outline"
                      onClick={() => window.open(file.fileLink, '_blank')}>
                      Download
                    </Button>
                  </div>
                ))}

                
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

