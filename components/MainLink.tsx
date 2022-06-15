import React from "react";
import { UnstyledButton, Text } from "@mantine/core";
import Link from "next/link";

interface MainLinkProps {
  label: string;
  href: string;
}

export function MainLink({ label, href }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Link href={href} passHref>
        <Text size="sm">{label}</Text>
      </Link>
    </UnstyledButton>
  );
}
