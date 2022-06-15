import { Loader, ScrollArea } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import FolderMessages from "../../components/FolderMessages";

const Folder: NextPage = () => {
  const router = useRouter();

  if (!router.isReady) return <Loader />;

  return (
    <ScrollArea>
      <FolderMessages id={router.query.id as string} />
    </ScrollArea>
  );
};

export default Folder;
