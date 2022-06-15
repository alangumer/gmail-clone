import React from "react";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Loader,
  Group,
} from "@mantine/core";
import { useQuery } from "react-query";
import { MainLink } from "./MainLink";
import { getFolders } from "../utils/api";
import { BrandGmail } from "tabler-icons-react";

type Props = {
  children?: React.ReactNode;
};

export function Layout({ children }: Props) {
  const theme = useMantineTheme();
  const [opened, setOpened] = React.useState(false);
  const { isLoading, error, data } = useQuery<string[], Error>(
    "folders",
    getFolders
  );

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          {isLoading ? (
            <Loader />
          ) : error ? (
            "An error has occurred: " + error.message
          ) : (
            <>
              {data!.map((folder) => (
                <MainLink
                  href={`/folders/${folder}`}
                  label={folder}
                  key={folder}
                />
              ))}
              <MainLink href="/sendemail" label="Send email" key="Send email" />
            </>
          )}
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <a href="/">
              <Group spacing={5}>
                <BrandGmail size={24} />
                <Text>Gmail clone</Text>
              </Group>
            </a>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
