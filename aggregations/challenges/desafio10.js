db.trips.aggregate(
  [
    {
      $addFields: {
        tripDurations: {
          $divide: [
            {
              $subtract: ["$stopTime", "$startTime"],
            },
            {
              $multiply: [60 * 60000],
            },
          ],
        },
      },
    },
    {
      $group: {
        _id: "$usertype",
        média: {
          $avg: "$tripDurations",
        },
      },
    },
    {
      $project: {
        _id: 0,
        tipo: "$_id",
        duracaoMedia: {
          $round: ["$média", 2],
        },
      },
    },
  ],
);
