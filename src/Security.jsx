const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzNzQ2NjMyYy05MzczLTRhYjYtODVkYi1hOTg1MDgzNTI0YjUiLCJ2YWxpZCI6IjEiLCJ1c2VyaWQiOiIxIiwibmFtZSI6ImJpbGFsIiwiZXhwIjoxNzAxNzU0MzUyLCJpc3MiOiJodHRwOi8vbXlzaXRlLmNvbSIsImF1ZCI6Imh0dHA6Ly9teXNpdGUuY29tIn0.f7NdKLeROFrGaezxmWA-1kQJPapNAM5GiHqX3fqgPEU";
const security = {
  headers: { Authorization: `Bearer ${token}` },
};

export default { security };
