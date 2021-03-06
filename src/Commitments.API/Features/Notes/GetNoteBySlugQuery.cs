using MediatR;
using System.Threading.Tasks;
using System.Threading;
using Commitments.Core.Interfaces;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Commitments.API.Features.Notes
{
    public class GetNoteBySlugQuery
    {
        public class Request : IRequest<Response> {
            public string Slug { get; set; }
        }

        public class Response
        {
            public NoteApiModel Note { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IAppDbContext _context;

            public Handler(IAppDbContext context) => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                return new Response()
                {
                    Note = NoteApiModel.FromNote(await _context.Notes
                        .Include(x => x.NoteTags)
                        .Include("NoteTags.Tag")
                        .Where(x => x.Slug == request.Slug)
                        .SingleAsync())
                };
            }
        }
    }
}
