'use client';
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
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { setFilesData } from "@/lib/actions/drive.action";




const s3 = new S3Client({
    region: 'us-east-1',
    credentials: {
        accessKeyId: '',
        secretAccessKey: '',
    },
});






const Hero = () => {
    const [file, setFile] = useState(null);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [uploadedLink, setUploadedLink] = useState(null);


    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    
    async function uploadFile(file, key) {
        const bucketInfo = {
            Bucket: 'uploadify-bennett',
            Key: key,
            Body: file,
        };


        let queueSize = 10;
        let partSize = file.size / (10 * 1024 * 1024);
        try {
    
            const upload = new Upload({
                client: s3,
                params: bucketInfo,
                queueSize: partSize > 5 ? queueSize : undefined,
                partSize: partSize > 5 ? partsize : undefined
            });
    
            upload.on('httpUploadProgress', (progress) => {
                console.log(progress);
                setUploadPercentage(Math.round((progress.loaded / progress.total) * 100));
            }
            );
            await upload.done().then(() => {
                setFilesData(key,file.name,`https://uploadify-bennett.s3.amazonaws.com/${file.name}`);
                setUploadPercentage(100);
                setUploadedLink(`https://uploadify-bennett.s3.amazonaws.com/${file.name}`);

            });
        } catch (err) {
            console.log(err);
        }
    
    
    
        //    try {
        //        const response = await s3.send(new PutObjectCommand(params));
        //        console.log('File uploaded successfully:', response);
        //    } catch (err) {
        //        console.error('Error uploading file:', err);
    
        //    }
    }
    const handleUpload = async () => {
        if (!file) return;
        setUploadPercentage(0);
        await uploadFile(file, file.name);
    };
    //cancel s3 upload when cancel button is clicked
    const handleCancel = async () => {
        if (!file) return;
        setUploadPercentage(0);

    }
     

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
                        <Input id="picture" type="file" onChange={handleFileChange} />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button style={{ backgroundColor: '#E95793' }} onClick={handleUpload}> Upload</Button>
                </CardFooter>
                {uploadPercentage > 0 && (
                    <div className="flex items-center justify-center">
                        <div className="w-1/2 mb-12">
                            <LinearProgress variant="determinate" value={uploadPercentage} sx={{ bgcolor: '#FFFFF', '& .MuiLinearProgress-bar': { bgcolor: '#E95793' }, paddingBottom: '8px' }} />
                        </div>
                        <div className="h-4"></div>
                    </div>
                )}
            </Card>
            {uploadedLink && (
                <Card className="w-[500px] opacity-100 ">
                    <CardHeader>
                        <CardTitle>Uploaded</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="link">Link</Label>
                            <Input id="link" type="text" value={uploadedLink} readOnly />
                            <Button onClick={() => navigator.clipboard.writeText(uploadedLink)}>Copy</Button>
                        </div>
                    </CardContent>


                </Card>
            )}
        </div>
    );
}



export default Hero;

