import Providers from "../providers";
import AuthCardFooterButton from "./components/footer-button";

import { AuthCardFooterButtonProps } from "./components/footer-button";

import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
} from "../ui/card";

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  footerButton: AuthCardFooterButtonProps;
  showProviders: boolean;
}

export default function AuthCard({
  children,
  title,
  footerButton,
  showProviders,
}: AuthCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardContent>{children}</CardContent>
        {showProviders && (
          <CardFooter>
            <Providers />
          </CardFooter>
        )}
        <CardFooter>
          <AuthCardFooterButton
            label={footerButton.label}
            href={footerButton.href}
          />
        </CardFooter>
      </CardHeader>
    </Card>
  );
}
