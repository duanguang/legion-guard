import {JsonProperty} from 'hoolinks/json-mapper-object';
export class workItemJobNameEntity{ 
    @JsonProperty('id')
    id = void 0 
 
    @JsonProperty('name')
    name = void 0 
 
}
export class companyNameEntity{ 
    @JsonProperty('id')
    id = void 0 
 
    @JsonProperty('name')
    name = void 0 
 
}
export class DetailEntityEntity{ 
    @JsonProperty('id')
    id = void 0 
 
    @JsonProperty('orderNo')
    orderNo = void 0 
 
    @JsonProperty('serviceOrderNumber')
    serviceOrderNumber = void 0 
 
    @JsonProperty('itemNo')
    itemNo = void 0 
 
    @JsonProperty('scpItemNo')
    scpItemNo = void 0 
 
    @JsonProperty('pickUpTime')
    pickUpTime = void 0 
 
    @JsonProperty('deliveryTime')
    deliveryTime = void 0 
 
    @JsonProperty('pickupAddress')
    pickupAddress = void 0 
 
    @JsonProperty('deliveryAddress')
    deliveryAddress = void 0 
 
    @JsonProperty('tradeType')
    tradeType = void 0 
 
    @JsonProperty('trailerTransportType')
    trailerTransportType = void 0 
 
    @JsonProperty('fromSourceNo')
    fromSourceNo = void 0 
 
    @JsonProperty('itemStatus')
    itemStatus = void 0 
 
    @JsonProperty('orderStatus')
    orderStatus = void 0 
 
    @JsonProperty('workItemStatusName')
    workItemStatusName = void 0 
 
    @JsonProperty({clazz:workItemJobNameEntity,name:'workItemJobName'})
    workItemJobName = new workItemJobNameEntity() 
 
    @JsonProperty({clazz:companyNameEntity,name:'companyName'})
    companyName = [] 
 
    @JsonProperty('pageSize')
    pageSize = void 0 
 
    @JsonProperty('pageIndex')
    pageIndex = void 0 
 
    @JsonProperty('shipper')
    shipper = void 0 
 
    @JsonProperty('saasCompanyUid')
    saasCompanyUid = void 0 
 
    @JsonProperty('spUid')
    spUid = void 0 
 
    @JsonProperty('orderSourcePlatform')
    orderSourcePlatform = void 0 
 
}
export class aaaEntity{ 
    @JsonProperty('ccc')
    ccc = void 0 
 
}
export class templateEntity{ 
    @JsonProperty({clazz:DetailEntityEntity,name:'DetailEntity'})
    DetailEntity = [] 
 
    @JsonProperty({clazz:aaaEntity,name:'aaa'})
    aaa = new aaaEntity() 
 
}
