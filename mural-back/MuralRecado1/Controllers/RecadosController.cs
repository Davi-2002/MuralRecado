using Microsoft.AspNetCore.Mvc;

namespace MuralRecado1.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RecadosController : Controller
{
    private static List<Recado> ListaRecados = new List<Recado>
    {
        new Recado
        {
            Id = 1,
            Autor = "joão",
            Destinatario = "alfredo",
            Titulo = "texto interessante",
            Conteudo = "tem coisa aqui",
            Data = new DateOnly(2026, 4, 10)
        }
    };

    [HttpGet]
    public IActionResult GetRecados()
    {
        return Ok(ListaRecados);
    }

    [HttpPost]
    public IActionResult PostRecados(Recado novoRecado)
    {
        novoRecado.Id = ListaRecados.Count() + 1;
        ListaRecados.Add(novoRecado);
        return Created("", novoRecado);
    }
}
