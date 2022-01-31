---
title: Machine learning for credit scoring
author: ''
date: '2022-01-22'
slug: machine-learning-for-credit-scoring
categories:
  - Academic Project
  - R
tags:
  - machine learning
  - classification
  - logistic regression
  - LDA
  - PCA
  - credit scoring
  - finance
subtitle: 'Applying machine learning to predict the probability of default of mechanical sector companies.'
summary: 'Applying machine learning to predict the probability of default of mechanical sector companies.'
authors: []
image:
  caption: 'Image credit: [**Pixabay**](https://pixabay.com/photos/risk-word-letters-boggle-game-1945683/)'
  focal_point: ''
  preview_only: no
projects: []
toc: true
---


## Introduction

In the practice of banking and financial institutions, financing activities are subject to a careful assessment of the creditworthiness and solvency of a client. 

This process is commonly known as credit scoring and is based on the application of statistical methods to analyze particular information about the characteristics of the client (payment history, employment, balance sheet data and other personal information) and the type of loan to be provided, summarizing through a score their risk profile to decide whether to grant or refuse the loan.

This project aims to analyze the solvency of companies in the Italian general mechanical engineering sector, using a sample of companies both active in the market and failed, to better understand what are the main factors that influence the probability of default in this market and create a classification of companies by different risk levels.


## About the proect
The analysis was performed in R using machine learning methods for classification ([logistic regression](https://en.wikipedia.org/wiki/Logistic_regression) and [linear discriminant analysis](https://en.wikipedia.org/wiki/Linear_discriminant_analysis)), dimensionality reduction ([principal component analysis](https://en.wikipedia.org/wiki/Principal_component_analysis)) and model selection ([stepwise](https://en.wikipedia.org/wiki/Stepwise_regression)). 

The data used come from the database [AIDA](https://www.bvdinfo.com/it-it/le-nostre-soluzioni/dati/nazionali/aida) (Analisi Informatizzata delle Aziende Italiane) offered by [Bureau van Dijk](https://www.bvdinfo.com/en-gb/), which collects information on Italian companies, classified by sector and geographical area.

In particular, the project is structured as follows:

- Importing and cleaning data (detection of outliers and missing data)
- Creation of balance sheet indices for analysis and descriptive statistics
- Sampling: stratification by asset size and geographic area, splitting (training and test sample) for cross validation 
- Correlation analysis and PCA
- Variables and model selection, comparing logistic regression and LDA with regressors obtained from PCA and stepwise methods
- Scoring and risk classes
- Conclusion



{{% callout note %}}
Not yet published, it will be available soon.
{{% /callout %}}




