export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "E-mail",
    width: 230,
  },
  {
    field: "cpf",
    headerName: "Cpf",
    width: 230,
  },

  {
    field: "country",
    headerName: "País",
    width: 100,
  },
  {
    field: "city",
    headerName: "Cidade",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Celular",
    width: 100,
  },
];

export const serviceColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Nome",
    width: 150,
  },
  {
    field: "cnpj",
    headerName: "Cnpj",
    width: 150,
  },
  {
    field: "type",
    headerName: "Tipo",
    width: 100,
  },
  {
    field: "title",
    headerName: "Título",
    width: 230,
  },
  {
    field: "city",
    headerName: "Cidade",
    width: 100,
  },
];

export const productColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Título",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Descrição",
    width: 200,
  },
  {
    field: "price",
    headerName: "Preço",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max Preço",
    width: 100,
  },
];