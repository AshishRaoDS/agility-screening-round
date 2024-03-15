import {secondDataEngineerSet } from "./data-engineer";

export const firstDataEngineeringSet = [
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
    },
    {
        question: "Types of cluster in databaricks",
        type: 'fill',
        answer: ["standard", "high concurrency"],
        answerCount: 2,
        time: 25
    },
    {
        question: "What is a common technique used to improve performance in Databricks clusters?",
        type: "select",
        options: [
            "Increasing the number of partitions in RDDs",
            "Decreasing the number of executors in the cluster",
            "Reducing the level of parallelism in Spark jobs",
            "Decreasing the amount of memory allocated to each executor"
        ],
        answer: "Increasing the number of partitions in RDDs",
        time: 25,
    },
    {
        question: "What is the purpose of the Databricks Runtime in performance optimization?",
        type: "select",
        options: [
            "To provide optimized versions of Apache Spark and other components for improved performance",
            "To allocate additional resources to Spark jobs dynamically",
            "To automatically optimize SQL queries for better performance",
            "To schedule Spark jobs to run at specific times for optimal resource utilization"
        ],
        answer: "To provide optimized versions of Apache Spark and other components for improved performance",
        time: 25,
    },
    {
        question: "Which of the following is a best practice for optimizing shuffle performance in Databricks?",
        type: "select",
        options: [
            "Increasing the level of parallelism for shuffle operations",
            "Reducing the number of partitions in RDDs",
            "Disabling dynamic allocation of resources",
            "Using smaller instance types for worker nodes"
        ],
        answer: "Increasing the level of parallelism for shuffle operations",
        time: 25,
    },
    {
        question: "Which of the following functions can be used to improve the performance of Spark SQL queries by avoiding unnecessary data shuffling?",
        type: "select",
        options: [
            "collect_list()",
            "broadcast()",
            "explode()",
            "groupBy()"
        ],
        answer: "broadcast()",
        time: 25,
    },
    {
        question: "How can you optimize joins between large datasets in Databricks?",
        type: "select",
        options: [
            "Using partitioning and bucketing techniques",
            "Increasing the executor memory allocation",
            "Disabling query caching",
            "Using unindexed columns in join conditions"
        ],
        answer: "Using partitioning and bucketing techniques",
        time: 25,
    },
    {
        question: "Which of the following parameters can be configured in a Notebook activity in Azure Data Factory?",
        type: "select",
        options: [
            "Source dataset",
            "Target folder",
            "Databricks cluster size",
            "Notebook path and parameters"
        ],
        answer: "Notebook path and parameters",
        time: 25,
    },
    {
        question: "In Azure Data Factory, what is the significance of the Databricks linked service when using a Notebook activity?",
        type: "select",
        options: [
            "It specifies the authentication method for accessing Databricks resources",
            "It defines the connection information required to access the Databricks workspace",
            "It determines the type of Databricks cluster to be used for notebook execution",
            "It provides access to Databricks notebooks for code sharing and collaboration"
        ],
        answer: "It defines the connection information required to access the Databricks workspace",
        time: 25,
    },
    {
        question: "How can you monitor the execution status of a Databricks notebook called by a Notebook activity in Azure Data Factory?",
        type: "select",
        options: [
            "By viewing the Databricks notebook output in the Azure Data Factory portal",
            "By checking the status of the Notebook activity in the Azure Data Factory pipeline run details",
            "By querying the Databricks workspace logs using Azure Monitor",
            "By receiving email notifications from Azure Data Factory upon notebook completion"
        ],
        answer: "By checking the status of the Notebook activity in the Azure Data Factory pipeline run details",
        time: 25,
    },
    {
        question: "What is the primary purpose of the ForEach activity in Azure Data Factory?",
        type: "select",
        options: [
            "To copy data between different data stores",
            "To execute a set of activities iteratively based on a specified collection",
            "To trigger Azure Functions for data processing tasks",
            "To perform complex data transformations using Apache Spark"
        ],
        answer: "To execute a set of activities iteratively based on a specified collection",
        time: 25,
    },
    {
        question: "Which of the following collections can be used as input for the ForEach activity in Azure Data Factory?",
        type: "select",
        options: [
            "A JSON array",
            "A CSV file",
            "A SQL database table",
            "All of the above"
        ],
        answer: "A JSON array",
        time: 25,
    },
    {
        question: "Which of the following activities cannot be used within a ForEach loop in Azure Data Factory?",
        type: "select",
        options: [
            "Copy Activity",
            "Web Activity",
            "If Condition Activity",
            "SQL Stored Procedure Activity"
        ],
        answer: "If Condition Activity",
        time: 25,
    },
    {
        question: "What happens if an error occurs during the execution of an activity within a ForEach loop in Azure Data Factory?",
        type: "select",
        options: [
            "The entire ForEach loop fails, and subsequent iterations are not executed",
            "The error is logged, and the ForEach loop continues with the next iteration",
            "The entire pipeline fails, and no further activities are executed",
            "Azure Data Factory automatically retries the failed activity until it succeeds"
        ],
        answer: "The entire ForEach loop fails, and subsequent iterations are not executed",
        time: 25,
    },
    {
        question: "How can you pass parameters to activities within a ForEach loop in Azure Data Factory?",
        type: "select",
        options: [
            "By specifying parameters directly within the ForEach activity configuration",
            "By defining parameters in the pipeline and mapping them to activity properties",
            "By using variables scoped within the ForEach loop",
            "All of the above"
        ],
        answer: "All of the above",
        time: 25,
    },
    {
        question: "Which activity in Azure Data Factory (ADF) is used to call a REST API as a data source?",
        type: "select",
        options: [
            "Copy Activity",
            "Web Activity",
            "ForEach Activity",
            "SQL Stored Procedure Activity"
        ],
        answer: "Web Activity",
        time: 25,
    },
    {
        question: "What is the primary purpose of the Web Activity in Azure Data Factory?",
        type: "select",
        options: [
            "To copy data between different data stores",
            "To call external web services, including REST APIs",
            "To trigger Azure Functions for data processing tasks",
            "To perform complex data transformations using Apache Spark"
        ],
        answer: "To call external web services, including REST APIs",
        time: 25,
    },
    {
        question: "Which HTTP method is commonly used to retrieve data from a REST API in Azure Data Factory?",
        type: "select",
        options: [
            "POST",
            "PUT",
            "GET",
            "DELETE"
        ],
        answer: "GET",
        time: 25,
    },
    {
        question: "How can you authenticate with a secured REST API when calling it from Azure Data Factory?",
        type: "select",
        options: [
            "By providing a username and password in the Web Activity configuration",
            "By using OAuth authentication with an access token",
            "By whitelisting the IP address of the Azure Data Factory instance",
            "By embedding API keys directly in the Web Activity URL"
        ],
        answer: "By using OAuth authentication with an access token",
        time: 25,
    },
    {
        question: "What is the output format typically used when calling a REST API from Azure Data Factory?",
        type: "select",
        options: [
            "XML",
            "CSV",
            "JSON",
            "YAML"
        ],
        answer: "JSON",
        time: 25,
    }
]

export function getRandomElements() {
    const firstShuffledArray = firstDataEngineeringSet.slice();
    const secondShuffledArray = secondDataEngineerSet.slice()

    // Fisher-Yates shuffle algorithm
    for (let i = firstShuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [firstShuffledArray[i], firstShuffledArray[j]] = [firstShuffledArray[j], firstShuffledArray[i]];
    }

    for (let i = secondShuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [secondShuffledArray[i], secondShuffledArray[j]] = [secondShuffledArray[j], secondShuffledArray[i]];
    }

    const firstDataEngineeringQuestions = firstShuffledArray.slice(0,7);
    const secondDataEngineeringQuestions = secondShuffledArray.slice(0,8);

    return [...firstDataEngineeringQuestions, ...secondDataEngineeringQuestions]
}


