# SquareConnect.RetrieveCustomerResponse

### Description

Defines the fields that are included in the response body of a request to the [RetrieveCustomer](#endpoint-retrievecustomer) endpoint.  One of `errors` or `customer` is present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**customer** | [**Customer**](Customer.md) | The requested customer. | [optional] 


