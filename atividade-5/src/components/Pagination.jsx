export function Pagination({ page, totalPages, onChange }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        style={{ marginRight: "10px" }}
      >
        Anterior
      </button>

      <span>
        Página {page} de {totalPages}
      </span>

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        style={{ marginLeft: "10px" }}
      >
        Próxima
      </button>
    </div>
  );
}