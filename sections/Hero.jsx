"use client";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import LinearProgress from '@mui/material-next/LinearProgress';





const Hero = () => {

    const [uploadPercentage, setUploadPercentage] = useState(0);

    const updateProgressButton = () => {
        if (uploadPercentage < 100)
        setUploadPercentage(uploadPercentage + 10);
    };

    return (
 
        <div className="text-white max-w-[1080px] pt-12 p-16 h-full w-full bg-white flex flex-col items-center justify-start gap-12 m-t-8">



            <Card className="w-[350px] opacity-100 ">
                <CardHeader>
                    <CardTitle>Upload Your File(s)</CardTitle>
                    <CardDescription>Get Instant Shareable Link for Your Files.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture">File(s)</Label>
                        <Input id="picture" type="file" />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button style={{ backgroundColor: '#E95793' }}> Upload</Button>
                </CardFooter>

                

                {uploadPercentage > 0 && ( 
                                        <div className="flex items-center justify-center">
                                        <div className="w-1/2 mb-12" >
                                        <LinearProgress  variant="determinate" value={uploadPercentage} sx={{bgcolor: '#FFFFF','& .MuiLinearProgress-bar': { bgcolor: '#E95793' } ,paddingBottom: '8px' }}/> 
                                        </div>
                                        <div className="h-4"></div>

    
                                        </div>
                
                    
                     )}
            </Card>

   



        </div>


    );
}

export default Hero;