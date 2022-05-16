db.movies.aggregate(
  [
    {
      $match: {
        countries: "USA",
        "tomatoes.viewer.rating": {
          $gte: 3,
        },
      },
    },
    {
      $match: {
        cast: {
          $exists: true,
        },
      },
    },
    {
      $addFields: {
        act_favs: {
          $setIntersection: [
            ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"],
            "$cast",
          ],
        },
      },
    },
    {
      $addFields: {
        num_favs: {
          $size: "$act_favs",
        },
      },
    },
    {
      $sort: {
        num_favs: -1,
        "tomatoes.viewer.rating": -1,
        title: -1,
      },
    },
    {
      $limit: 25,
    },
    {
      $group: {
        _id: null,
        lastFilm: {
          $last: "$title",
        },
      },
    },
    {
      $project: {
        _id: 0,
        title: "$lastFilm",
      },
    },
  ],
);
