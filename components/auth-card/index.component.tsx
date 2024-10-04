import Providers from "../providers";
import AuthCardPrimaryButton from "./components/primary-button";

import { AuthCardPrimaryButtonProps } from "./components/primary-button";

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
  primaryButton: AuthCardPrimaryButtonProps;
  showProviders: boolean;
}

export default function AuthCard({
  children,
  title,
  primaryButton,
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
          <AuthCardPrimaryButton
            label={primaryButton.label}
            href={primaryButton.href}
          />
        </CardFooter>
      </CardHeader>
    </Card>
  );
}
