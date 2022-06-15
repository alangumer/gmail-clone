export async function getFolders() {
  return fetch("/api/folders").then((res) => res.json());
}

export async function getFolder(id: string) {
  return fetch(`/api/folders/${id.toLowerCase()}`).then((res) => res.json());
}

export async function getMessages() {
  return fetch("/api/messages").then((res) => res.json());
}

export async function deleteMessage(id: string) {
  return fetch(`/api/messages/${id.toLowerCase()}`, { method: "DELETE" }).then(
    (res) => res.json()
  );
}

export async function sendEmail(data: any) {
  return fetch(`/api/messages/new`, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
