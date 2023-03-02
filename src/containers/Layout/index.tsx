import { Stack } from "@mui/system";
import { SVGProps } from "react";

interface LayoutProps {
    children: React.ReactNode;
    image?: React.FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const Layout = ({ children, image: Image } : LayoutProps) => {

    return(
        <Stack direction="row" justifyContent="center" alignItems="center">
            <div className="w-50 pl-12">
                <div className="pl-12">
                    {children}
                </div>
            </div>
            {Image && (
                <div className="w-50 h-100">
                    <Image className="h-100 w-100" />
                </div>
            )}
        </Stack>
    )
}