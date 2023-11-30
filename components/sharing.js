import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card key="1" className="w-[732px]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Share with others</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input placeholder="Add more people and groups" />
            </div>
            <div className="flex flex-col space-y-1.5 divide-y divide-gray-300">
              <div className="text-md font-semibold text-gray-600 py-2">People who have access</div>
              <div className="flex justify-between py-2 items-center">
                <div className="flex items-center space-x-2">
                  <IconPerson className="w-6 h-6 text-gray-500" />
                  <div className="text-md">Johnathan Doe (yourself)</div>
                </div>
                <div className="text-md font-semibold">Owner</div>
              </div>
              <div className="flex justify-between py-2 items-center">
                <div className="flex items-center space-x-2">
                  <IconPerson className="w-6 h-6 text-gray-500" />
                  <div className="text-md">Jane Elizabeth Smith</div>
                </div>
                <div className="w-40">
                  <Select>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Editor" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                      <SelectItem value="commenter">Commenter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <div className="text-md font-semibold text-gray-600">General access settings</div>
              <div className="flex items-center space-x-2">
                <Select>
                  <Select>
                    <SelectTrigger id="access">
                      <IconLock className="w-5 h-5 text-gray-500 mr-2" />
                      <SelectValue placeholder="Restricted" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="restricted">Restricted</SelectItem>
                      <SelectItem value="public">Public</SelectItem>
                    </SelectContent>
                  </Select>
                  <SelectContent position="popper">
                    <SelectItem value="restricted">Restricted</SelectItem>
                    <SelectItem value="public">Public</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="text-xs text-gray-500">Only people granted access can open with the link</div>
              <div className="flex space-x-2 items-center">
                <Button className="flex items-center justify-center bg-blue-500 text-white rounded-full px-4 py-2">
                  <IconLink className="w-5 h-5 text-white mr-2" />
                  Copy the link
                </Button>
                <Button variant="outline">Done</Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

function IconLink(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function IconLock(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function IconPerson(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
    </svg>
  )
}