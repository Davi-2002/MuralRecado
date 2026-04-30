namespace MuralRecado1;

public class Recado
{
    public int Id { get; set; }
    public string Autor { get; set; } = string.Empty;
    public string Destinatario { get; set; } = string.Empty;
    public string Titulo { get; set; } = string.Empty;
    public string Conteudo { get; set; } = string.Empty;
    public DateOnly Data { get; set; }
}
