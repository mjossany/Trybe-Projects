db.trips.aggregate(
  [
    {
      $match: {
        $and: [
          {
            birthYear: {
              $exists: true,
            },
          },
          {
            birthYear: {
              $ne: "",
            },
          },
        ],
      },
    },
    {
      $addFields: {
        anoNascimento: {
          $toInt: "$birthYear",
        },
      },
    },
    {
      $group: {
        _id: null,
        max: {
          $max: "$anoNascimento",
        },
        min: {
          $min: "$anoNascimento",
        },
      },
    },
    {
      $project: {
        _id: 0,
        maiorAnoNascimento: "$max",
        menorAnoNascimento: "$min",
      },
    },
  ],
);
