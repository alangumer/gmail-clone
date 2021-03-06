import {
  ActionIcon,
  Group,
  Loader,
  ScrollArea,
  Table,
  Text,
} from "@mantine/core";
import type { NextPage } from "next";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Trash } from "tabler-icons-react";
import { Message } from "../entities/Message";
import { deleteMessage, getMessages } from "../utils/api";

const Home: NextPage = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery<Message[], Error>(
    "messages",
    getMessages
  );
  const mutation = useMutation(deleteMessage, {
    onSuccess: (response, value) => {
      console.log(response, value, data);
      queryClient.setQueryData(
        ["messages"],
        data!.filter((message) => message.id !== value)
      );
    },
  });

  const handleDeleteMessage = (id: string) => {
    mutation.mutate(id);
  };

  if (isLoading) return <Loader />;

  if (error) return <div>An error has occurred: {error.message}</div>;

  const rows = data!.map((item) => (
    <tr key={item.id}>
      <td>
        <Group spacing="sm">
          <Text size="sm" weight={500}>
            {item.from}
          </Text>
        </Group>
      </td>
      <td>
        <Text size="sm" weight={500}>
          {item.subject}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon color="red" onClick={() => handleDeleteMessage(item.id)}>
            <Trash size={16} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};

export default Home;
