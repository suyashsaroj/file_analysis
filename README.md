# file_analysis
<div align="center">
  <h1>Text File Analysis System - Node.js Backend</h1>
  <p>This repository contains the implementation of a Node.js backend system for text file analysis.</p>
</div>

## Features

1. **File Upload:**
   - API endpoint ([`POST /upload`](#upload)) for uploading text files.
   - Generates a unique `fileId` for each uploaded file.
   - Stores metadata (filename, upload date) in the PostgreSQL database using Prisma ORM.

2. **Initiate Analysis Task:**
   - API endpoint ([`POST /analyze`](#analyze)) to start text analysis on an uploaded file using `fileId`.
   - Supported analysis operations:
     - `countWords`: Counts total words in the text.
     - `countUniqueWords`: Counts unique words.
     - `findTopKWords`: Finds {k} most frequent words (user-specified parameter).
   - Returns a unique `taskId` for tracking analysis progress.

3. **Retrieve Analysis Results:**
   - API endpoint ([`GET /results/:taskId`](#results)) to fetch analysis results using `taskId`.
   - Returns results of the requested analysis operation.

## Database

- Utilizes PostgreSQL for storing file metadata and analysis results.
- Database schema designed with Prisma ORM.

## Technologies Used

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL

## Setup Instructions

1. [**Fork the repository**](https://github.com/suyashsaroj/file_analysis/fork) - Click here to create your own copy of this repository.

2. **Install Dependencies**
   ```bash
   npm install
This repository contains the implementation of a Node.js backend system for text file analysis. The system allows users to upload text files, initiate various text analysis tasks, and retrieve the results of those analyses.
