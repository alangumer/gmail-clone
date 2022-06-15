import { ActionIcon, Group, Loader, Table, Text } from "@mantine/core";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Trash } from "tabler-icons-react";
import { FolderMessage } from "../entities/FolderMessage";
import { deleteMessage, getFolder } from "../utils/api";

type Props = {
  id: string;
};

const FolderMessages = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery<FolderMessage[], Error>(
    "folder",
    () => getFolder(id)
  );
  const mutation = useMutation(deleteMessage, {
    onSuccess: (response, value) => {
      console.log(response, value, data);
      queryClient.setQueryData(
        ["folder"],
        data!.filter((message) => message["message-id"] !== value)
      );
    },
  });

  const handleDeleteMessage = (id: string) => {
    mutation.mutate(id);
  };

  if (isLoading) return <Loader />;

  if (error) return <div>An error has occurred: {error.message}</div>;

  const rows = data!.map((item) => (
    <tr key={item["message-id"]}>
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
          <ActionIcon
            color="red"
            onClick={() => handleDeleteMessage(item["message-id"])}
          >
            <Trash size={16} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default FolderMessages;
