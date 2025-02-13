---
title: Statistical models for car insurance pricing
author: ''
date: '2022-01-22'
slug: statistical-models-for-car-insurance-pricing
categories:
  - Academic Project
  - R
tags:
  - actuarial sciences
  - nonlife insurance
  - GLM
  - poisson regression
subtitle: 'Using Generalized Linear Models  to estimate the pure premium and creating a risk classification of insureds.'
summary: 'Using Generalized Linear Models to estimate the pure premium and creating a risk classification of insureds.'
authors: []
image:
  caption: 'Image credit: [**Freepik**](https://www.freepik.com/free-photo/insurance-agent-working-during-site-car-accident-claim-process-people-car-insurance-claim_5597944.htm#query=car%20insurance&position=22&from_view=search)'
  focal_point: ''
  preview_only: no
projects: []
toc: true
---


## Introduction

In the insurance sector, contracting and pricing policy is oriented towards the pursuit of the mutual principle, whereby the insurance company diversifies risks (the different policies) by grouping them into homogeneous classes.
The purpose of this classification is to even out the differences between the different categories of customers in relation to their insured risk, so that the insurance company is better able to cope with the occurrence of damaging events and thus to pay the compensation due.
Thus, the basic idea of class pricing is to make the individual insured contribute to the overall riskiness of the insurer's portfolio in an appropriate and efficient manner.

The estimate of the pure premium, net of any expense loading, is determined in relation to the company's expected loss on a certain insured risk:


`$$Premium = E(Indemnity \ | \ Insured \ characteristics)$$`

On the basis of the personal characteristics of the insured, and possibly of the insured item, it is therefore possible to quantify the risk incurred by the company. 
This risk, in the case of non-life insurance, depends on two factors:

- The frequency of claims: `\(Frequency = \frac{N \ Claims}{Exposure}\)`
- The severity of claims: `\(Severity = \frac{Total \ Loss}{N \ Claims}\)`

Assuming that these can be modelled as two independent random variables, we can express the pure premium that each policyholder will pay to the insurer as the product of their expected values.

`$$Premium = E(Frequency) \times E(Severity)$$`

The objective of this paper is therefore to build a model for Claims Frequency and Severity for the construction of risk class pricing in *Motor Third Party Liability* (Motor-TPL) insurance.


## About the project

The analysis is developed entirely in R using data available in the `CASdatasets` package, which contains a wide variety of actuarial datasets, originally collected for the book *“Computational Actuarial Science with R“* edited by Arthur Charpentier.In particular, two datasets were used, `freMTPLfreq` and `freMTPLsev`, which collect the risk characteristics for 413,169 motor liability policies (mostly observed over one year of exposure) of a French insurance company: `freMTPLfreq` contains the risk characteristics and the number of claims, while `freMTPLsev` contains the amount of claims and the corresponding policy ID.


The project is structured as follows:
- Importing data  
- Descriptive analysis, detection of outliers and creation of variables for frequency and severity model estimation
- Estimation and choice of model for claims frequency using a [GLM](https://en.wikipedia.org/wiki/Generalized_linear_model) approach with Poisson distribution and a “log“ link function 
- Estimation and choice of model for severity using a GLM approach with Gamma distribution and a “log“ link function
- Pure premium estimation and creation of tariff classes
- Conclusion


{{% callout note %}}
Not yet published, it will be available soon.
{{% /callout %}}



