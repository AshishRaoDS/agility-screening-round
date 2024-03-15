export const secondDataEngineerSet = [
    {
        question: "Does an INNER join guarantee to return all rows from both the tables?",
        type: 'select',
        options: [
            "True",
            "False",
        ],
        answer: "False",
        answerCount: 1,
        time: 15
    },
    {
        question: "What function gets the first NON-NULL value",
        type: 'fill',
        answer: ["coalesce", "nvl"],
        answerCount: 1,
        time: 15
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
        time: 15
    },
    {
        question: "What are the different ranking functions in SQL?",
        type: 'fill',
        answer: ['rank', 'dense rank', 'row number', 'row_number', 'dense_rank'],
        answerCount: 2,
        time: 15
    },
    {
        question: "What is a virtual table based on a query called? ",
        type: "fill",
        answer: ["view"],
        answerCount: 1,
        time: 15
    },
    {
        question: "Which function is used to retrieve the highest value of a column?",
        type: 'fill',
        answer: ["max"],
        answerCount: 1,
        time: 15
    },
    {
        question: "Which clause is used to sort the result of a query?",
        type: 'fill',
        answer: ["order by"],
        answerCount: 1,
        time: 15
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
        time: 15
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
        time: 15
    },
    {
        question: "What are the different types of triggers in ADF?",
        type: 'fill',
        answer: ["scheduled", "tumbling windows", "event based"],
        answerCount: 3,
        time: 15
    },
    {
        question: "ADF is primarily used for data visualization and reporting ?",
        type: 'select',
        options: [
            "True",
            "False",
        ],
        answer: "False",
        answerCount: 1,
        time: 15
    },
    {
        question: "True or False: Spark applications can only be written in Scala.",
        type: 'select',
        options: [
            "True",
            "False",
        ],
        answer: "False",
        answerCount: 1,
        time: 15
    },
    {
        question: "True or False: Data shuffling always occurs between all worker nodes in a Spark cluster",
        type: 'select',
        options: [
            "True",
            "False",
        ],
        answer: "False",
        answerCount: 1,
        time: 15
    },
    {
        question: "What component in ADF stores connection information for accessing external data sources?",
        type: 'fill',
        answer: ["linked services"],
        answerCount: 1,
        time: 15
    },
    {
        question: "Which file system is used for storing data within Databricks Cluster?",
        type: 'fill',
        answer: ["dbfs"],
        answerCount: 1,
        time: 15
    },
    {
        question: "How can a cluster automatically scale compute resources up or down based on workload?",
        type: 'fill',
        answer: ["auto scaling"],
        answerCount: 1,
        time: 15
    },
    {
        question: "What component of Spark provides functionalities for working with structured data using SQL syntax?",
        type: 'fill',
        answer: ["spark sql"],
        answerCount: 1,
        time: 15
    },
    {
        question: "Which scheduler allows running notebooks or jobs in Databricks at specific times or intervals?",
        type: "select",
        options: [
            "Spark scheduler",
            "Databricks Job Scheduler",
            "Cluster scheduler",
            "Notebook scheduler"
        ],
        answer: "Databricks Job Scheduler",
        time: 15,
    },
    {
        question: "What type of transformations in Spark can potentially lead to data shuffling across worker nodes?",
        type: "select",
        options: [
            "Join operations",
            "Map operations",
            "Local aggregations",
            "All of the above"
        ],
        answer: "Join operations",
        time: 15,
    }
];
