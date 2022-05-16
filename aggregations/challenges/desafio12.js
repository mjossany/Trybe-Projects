db.trips.aggregate(
  [
    {
      $group: {
        _id: {
          weekday: {
            $dayOfWeek: "$startTime",
          },
          station: "$startStationName",
        },
        count: {
          $sum: 1,
        },
      },
    },
    {
      $match: {
        "_id.weekday": 5,
      },
    },
    {
      $sort: {
        count: -1,
      },
    },
    {
      $limit: 1,
    },
    {
      $project: {
        _id: 0,
        nomeEstacao: "$_id.station",
        total: "$count",
      },
    },
  ],
);
