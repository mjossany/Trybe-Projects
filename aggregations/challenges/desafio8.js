db.air_alliances.aggregate(
  [
    {
      $unwind: "$airlines",
    },
    {
      $lookup: {
        from: "air_routes",
        let: {
          airline_name: "$airlines",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$$airline_name", "$airline.name"],
              },
            },
          },
        ],
        as: "routes",
      },
    },
    {
      $unwind: "$routes",
    },
    {
      $match: {
        "routes.airplane": {
          $in: ["747", "380"],
        },
      },
    },
    {
      $group: {
        _id: "$name",
        count: {
          $sum: 1,
        },
      },
    },
    {
      $project: {
        _id: "$_id",
        totalRotas: "$count",
      },
    },
    {
      $sort: {
        totalRotas: -1,
      },
    },
    {
      $limit: 1,
    },
  ],
);
