using MyApp.Models;

namespace MyApp.Services
{
    public interface ISongCommentService
    {
        void saveComment(SongComment commentToSave);
    }
}