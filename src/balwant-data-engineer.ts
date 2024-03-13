export const newDataEngineeringQuestions = [
    {
        question: "Which of the following statements best describes Databricks Delta?",
        type: "select",
        options: [
            "It is a machine learning framework provided by Databricks.",
            "It is a cloud-based data warehouse service for processing big data.",
            "It is an optimized storage layer that provides ACID transactions, schema enforcement, and indexing capabilities.",
            "It is a real-time stream processing engine."
        ],
        answer: "It is an optimized storage layer that provides ACID transactions, schema enforcement, and indexing capabilities.",
        time: 25,
    },
    {
        question: "In Databricks, what does MLflow provide?",
        type: "select",
        options: [
            "A collaborative environment for building and deploying machine learning models.",
            "A managed service for deploying containerized applications.",
            "A platform for visualizing and analyzing data.",
            "A machine learning lifecycle management tool for tracking experiments, managing models, and deploying them to production."
        ],
        answer: "A machine learning lifecycle management tool for tracking experiments, managing models, and deploying them to production.",
        time: 25,
    },
    {
        question: "Which of the following languages is NOT natively supported in Databricks notebooks?",
        type: "select",
        options: [
            "Python",
            "Scala",
            "R",
            "JavaScript"
        ],
        answer: "JavaScript",
        time: 25,
    },
    {
        question: "What is the purpose of Databricks Runtime?",
        type: "select",
        options: [
            "To provide a runtime environment for executing Databricks notebooks.",
            "To manage user access and permissions in Databricks workspaces.",
            "To optimize data storage and query performance in Databricks Delta.",
            "To schedule and automate the execution of Databricks notebooks and jobs"
        ],
        answer: "To provide a runtime environment for executing Databricks notebooks.",
        time: 25,
    },
    {
        question: "How does Databricks support collaborative work among data engineers and data scientists?",
        type: "select",
        options: [
            "By providing role-based access control and permission management.",
            "By allowing users to share and collaborate on notebooks, dashboards, and data visualizations.",
            "By integrating with version control systems such as Git.",
            "All of the above."
        ],
        answer: "All of the above.",
        time: 25,
    },
    {
        question: "Which of the following statements about Databricks clusters is true?",
        type: "select",
        options: [
            "Databricks clusters are static and cannot be resized dynamically.",
            "Databricks clusters automatically scale up or down based on workload demand.",
            "Databricks clusters can only run a single type of workload at a time.",
            "Databricks clusters are limited to a maximum of 100 nodes."
        ],
        answer: "Databricks clusters automatically scale up or down based on workload demand.",
        time: 25,
    },
    {
        question: "What is the recommended way to deploy and manage machine learning models in Databricks?",
        type: "select",
        options: [
            "Using the Databricks Jobs feature to schedule model training and deployment.",
            "Using MLflow to track experiments, manage models, and deploy them to production.",
            "Using Databricks Notebooks to build and deploy models.",
            "Using Databricks Delta to store and serve model predictions."
        ],
        answer: "Using MLflow to track experiments, manage models, and deploy them to production.",
        time: 25,
    },
    {
        question: "Which Azure service is commonly used for storing data in Databricks workloads?",
        type: "select",
        options: [
            "Azure Blob Storage",
            "Azure SQL Database",
            "Azure Data Lake Storage",
            "Azure Cosmos DB"
        ],
        answer: "Azure Data Lake Storage",
        time: 25,
    },
    {
        question: "What is the primary advantage of using Databricks Delta Lake for data storage?",
        type: "select",
        options: [
            "It provides seamless integration with third-party data sources and formats.",
            "It offers built-in support for real-time stream processing.",
            "It ensures data consistency, reliability, and performance through ACID transactions and schema enforcement.",
            "It enables data scientists to train machine learning models using distributed computing."
        ],
        answer: "It ensures data consistency, reliability, and performance through ACID transactions and schema enforcement.",
        time: 25,
    },
    {
        question: "What role does Apache Spark play in Databricks?",
        type: "select",
        options: [
            "Apache Spark is the underlying distributed computing engine used by Databricks for data processing and analytics.",
            "Apache Spark is a standalone machine learning framework provided by Databricks.",
            "Apache Spark is a data visualization tool integrated with Databricks notebooks.",
            "Apache Spark is a managed service for deploying containerized applications in Databricks."
        ],
        answer: "Apache Spark is the underlying distributed computing engine used by Databricks for data processing and analytics.",
        time: 25,
    },
    {
        question: "What does the Databricks File System (DBFS) provide?",
        type: "select",
        options: [
            "A distributed file system for storing large datasets",
            "A relational database management system",
            "A message queue for real-time data processing",
            "A version control system for code collaboration"
        ],
        answer: "A distributed file system for storing large datasets",
        time: 25,
    },
    {
        question: "You are designing the folder structure for an Azure Data Lake Storage Gen2 container. Users will query data by using a variety of services including Azure Databricks and Azure Synapse Analytics serverless SQL pools. The data will be secured by subject area. Most queries will include data from the current year or current month. Which folder structure should you recommend to support fast queries and simplified folder security?",
        type: "select",
        options: [
            "/{SubjectArea}/{DataSource}/{DD}/{MM}/{YYYY}/{FileData}_{YYYY}_{MM}_{DD}.csv",
            "/{DD}/{MM}/{YYYY}/{SubjectArea}/{DataSource}/{FileData}_{YYYY}_{MM}_{DD}.csv",
            "/{YYYY}/{MM}/{DD}/{SubjectArea}/{DataSource}/{FileData}_{YYYY}_{MM}_{DD}.csv",
            "/{SubjectArea}/{DataSource}/{YYYY}/{MM}/{DD}/{FileData}_{YYYY}_{MM}_{DD}.csv"
        ],
        answer: "/{SubjectArea}/{DataSource}/{YYYY}/{MM}/{DD}/{FileData}_{YYYY}_{MM}_{DD}.csv",
        time: 25,
    },
    {
        question: "You have an Azure Data Lake Storage Gen2 container that contains 100 TB of data. You need to ensure that the data in the container is available for read workloads in a secondary region if an outage occurs in the primary region. The solution must minimize costs. Which type of data redundancy should you use?",
        type: "select",
        options: [
            "geo-redundant storage (GRS)",
            "read-access geo-redundant storage (RA-GRS)",
            "zone-redundant storage (ZRS)",
            "locally-redundant storage (LRS)"
        ],
        answer: "read-access geo-redundant storage (RA-GRS)",
        time: 25,
    },
    {
        question: "You have a SQL pool in Azure Synapse. You plan to load data from Azure Blob storage to a staging table. Approximately 1 million rows of data will be loaded daily. The table will be truncated before each daily load. You need to create the staging table. The solution must minimize how long it takes to load the data to the staging table. What type of distribution will you use?",
        type: "select",
        options: [
            "Hash",
            "Replicated",
            "Round robin"
        ],
        answer: "Hash",
        time: 25,
    },
    {
        question: "You have a SQL pool in Azure Synapse. You plan to load data from Azure Blob storage to a staging table. Approximately 1 million rows of data will be loaded daily. The table will be truncated before each daily load. You need to create the staging table. The solution must minimize how long it takes to load the data to the staging table. What type of indexing will you use?",
        type: "select",
        options: [
            "Clustered",
            "Clustered columnstore",
            "Heap"
        ],
        answer: "Clustered columnstore",
        time: 25,
    },
    {
        question: "You have a SQL pool in Azure Synapse. You plan to load data from Azure Blob storage to a staging table. Approximately 1 million rows of data will be loaded daily. The table will be truncated before each daily load. You need to create the staging table. The solution must minimize how long it takes to load the data to the staging table. What type of partitioning will you use?",
        type: "select",
        options: [
            "Date",
            "None"
        ],
        answer: "Date",
        time: 25,
    },
    {
        question: "Types of Integration Runtimes",
        type: 'fill',
        answer: ["azure integration runtime", "self hosted integration runtime", "azure siss integration runtime"],
        answerCount: 3,
        time: 25
    },
    {
        question: "Explain the two levels of security in ADLS Gen2",
        type: 'fill',
        answer: ["role-based access control", "access control list", "role based access control"],
        answerCount: 2,
        time: 25
    },
    {
        question: "What is the purpose of cluster policies in Databricks?",
        type: "select",
        options: [
            "To specify access control rules for different users and groups",
            "To define custom Spark configurations and runtime environments for clusters",
            "To configure autoscaling settings for dynamic resource allocation",
            "To define alerting thresholds for monitoring cluster performance"
        ],
        answer: "To define custom Spark configurations and runtime environments for clusters",
        time: 25,
    },
    {
        question: "What is the primary purpose of autoscaling in Databricks clusters?",
        type: "select",
        options: [
            "To automatically provision additional virtual machines as workload demand increases",
            "To automatically adjust the number of worker nodes in the cluster based on workload requirements",
            "To automatically optimize SQL queries for better performance",
            "To automatically schedule jobs to run at specific times"
        ],
        answer: "To automatically adjust the number of worker nodes in the cluster based on workload requirements",
        time: 25,
    }
]

export function getRandomElements(array: any, numberOfElements: number) {
    const shuffledArray = array.slice();

    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray.slice(0, numberOfElements);
}
