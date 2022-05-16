db.trips.aggregate(
  [
    {
      $match: {
        startTime: {
          $gte: ISODate("2016-03-10T00:00:00"),
          $lte: ISODate("2016-03-10T23:59:59"),
        },
      },
    },
    {
      $addFields: {
        tripDuration: {
          $subtract: ["$stopTime", "$startTime"],
        },
      },
    },
    {
      $group: {
        _id: null,
        media: {
          $avg: "$tripDuration",
        },
      },
    },
    {
      $project: {
        _id: 0,
        duracaoMediaEmMinutos: {
          $ceil: {
            $divide: ["$media", 60000],
          },
        },
      },
    },
  ],
);
