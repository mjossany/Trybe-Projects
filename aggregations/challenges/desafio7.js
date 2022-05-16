db.movies.aggregate(
  [
    {
      $match: {
        languages: "English",
      },
    },
    {
      $unwind: "$cast",
    },
    {
      $group: {
        _id: "$cast",
        filmQuantity: {
          $sum: 1,
        },
        average: {
          $avg: "$imdb.rating",
        },
      },
    },
    {
      $project: {
        _id: 1,
        numeroFilmes: "$filmQuantity",
        mediaIMDB: {
          $round: ["$average", 1],
        },
      },
    },
    {
      $sort: {
        numeroFilmes: -1,
        _id: -1,
      },
    },
  ],
);
