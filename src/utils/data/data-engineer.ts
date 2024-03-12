export const dataEngineerQuestions = [
    {
        question: "Does an INNER join guarantee to return all rows from both the tables?",
        type: 'fill',
        answer: ["false"],
        answerCount: 1,
        time: 10
    },
    {
        question: "What function gets the first NON-NULL value",
        type: 'fill',
        answer: ["coalesce", "nvl"],
        answerCount: 1,
        time: 10
    },
    {
        question: "What function combines the results of two different SELECT statements?",
        type: 'select',
        options: [
            "JOIN",
            "MERGE",
            "UNION",
            "COMBINE"
        ],
        answer: "UNION",
        time: 10
    },
    {
        question: "What are the different ranking functions in SQL?",
        type: 'fill',
        answer: ['rank', 'dense rank'],
        answerCount: 2,
        time: 10
    },
    {
        question: "What is a virtual table based on a query called? ",
        type: "fill",
        answer: ["view"],
        answerCount: 1,
        time: 10
    },
    {
        question: "Which function is used to retrieve the highest value of a column?",
        type: 'fill',
        answer: ["max"],
        answerCount: 1,
        time: 10
    },
    {
        question: "Which clause is used to sort the result of a query?",
        type: 'fill',
        answer: ["order by"],
        time: 10
    },
    {
        question: "Which statement permanently deletes all rows from a table?",
        options: [
            "Delete",
            "Truncate",
            "Drop",
            "Vacuum"
        ],
        answer: "Truncate",
        type: 'select',
        time: 10
    },
    {
        question: "Which keyword groups rows together for aggregate calculations?",
        options: [
            "Filter",
            "Group By",
            "Having",
            "Where"
        ],
        answer: ["Group By"],
        type: 'select',
        time: 10
    },
    {
        question: "What are the different types of triggers in ADF?",
        type: 'fill',
        answer: ["scheduled", "tumbling windows", "event based"],
        answerCount: 3,
        time: 10
    },
];
