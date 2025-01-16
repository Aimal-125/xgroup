const e=[{id:1,name:"John Doe",email:"johndoe@example.com",phone:"+1234567890",joined:"01 Jan 2020 12:00 PM",status:"Active",wallet:"$5000"},{id:2,name:"Jane Smith",email:"janesmith@example.com",phone:"+1987654321",joined:"15 Feb 2021 3:15 PM",status:"Blocked",wallet:"$2000"}],a=[{Sr:1,OrderID:"A12B987",InvestedCoins:"1,500",Profit:"0.6%/day",EarnedProfit:200,ClaimedCoins:8200,StartTime:"09:30",startDate:"24-10-24",status:"Running"},{Sr:2,OrderID:"B23C876",InvestedCoins:"2,000",Profit:"0.7%/day",EarnedProfit:250,ClaimedCoins:9500,StartTime:"10:00",startDate:"24-10-24",status:"Ended"},{Sr:3,OrderID:"C34D765",InvestedCoins:"1,200",Profit:"0.8%/day",EarnedProfit:150,ClaimedCoins:8800,StartTime:"10:45",startDate:"24-10-24",status:"Running"},{Sr:4,OrderID:"D45E654",InvestedCoins:"1,800",Profit:"0.75%/day",EarnedProfit:135,ClaimedCoins:9e3,StartTime:"11:15",startDate:"24-10-24",status:"Ended"},{Sr:5,OrderID:"E56F543",InvestedCoins:"2,500",Profit:"0.9%/day",EarnedProfit:225,ClaimedCoins:10500,StartTime:"11:45",startDate:"24-10-24",status:"Running"},{Sr:6,OrderID:"F67G432",InvestedCoins:"1,100",Profit:"0.7%/day",EarnedProfit:170,ClaimedCoins:8600,StartTime:"12:00",startDate:"25-10-24",status:"Ended"},{Sr:7,OrderID:"G78H321",InvestedCoins:"3,000",Profit:"1.0%/day",EarnedProfit:300,ClaimedCoins:11500,StartTime:"12:30",startDate:"25-10-24",status:"Running"},{Sr:8,OrderID:"H89I210",InvestedCoins:"2,200",Profit:"0.85%/day",EarnedProfit:270,ClaimedCoins:10500,StartTime:"13:00",startDate:"25-10-24",status:"Ended"}],t=[{sr:1,orderID:"ORD123456",tradeBank:"XYZ Bank",time:"12:30 PM",completionTime:"12:35 PM",tradeCoin:"Bitcoin",winBank:"State Bank",status:"-10"},{sr:2,orderID:"ORD123457",tradeBank:"ABC Bank",time:"1:00 PM",completionTime:"1:10 PM",tradeCoin:"Ethereum",winBank:"World Bank",status:"+19"},{sr:3,orderID:"ORD123458",tradeBank:"LMN Bank",time:"2:00 PM",completionTime:"2:15 PM",tradeCoin:"Ripple",winBank:"State Bank",status:"+12"}],n=[{sr:1,sessionId:123,coinsOnStateBank:1e3,coinsOnWorldBank:1e3,tradeOpenDoorTime:"10s",startTime:"1:00 PM",completionTime:"1:10 PM",winBank:"State Bank",date:"2025-01-01",status:"running"},{sr:2,sessionId:123,coinsOnStateBank:1e3,coinsOnWorldBank:1e3,tradeOpenDoorTime:"15s",startTime:"1:00 PM",completionTime:"1:10 PM",winBank:"State Bank",date:"2025-01-01",status:"completed"},{sr:3,sessionId:123,coinsOnStateBank:1e3,coinsOnWorldBank:1e3,tradeOpenDoorTime:"20s",startTime:"1:00 PM",completionTime:"1:10 PM",winBank:"World Bank",date:"2025-01-01",status:"completed"}],o=[{id:1,orderId:"ORD123",from:"User A",to:"User B",date:"2024-12-26",time:"10:00 AM",amount:"$100",status:"Pending"},{id:2,orderId:"ORD124",from:"User C",to:"User D",date:"2024-12-25",time:"11:00 AM",amount:"$200",status:"Approved"},{id:3,orderId:"ORD125",from:"User E",to:"User F",date:"2024-12-24",time:"12:00 PM",amount:"$150",status:"Declined"},{id:4,orderId:"ORD123",from:"User A",to:"User B",date:"2024-12-26",time:"10:00 AM",amount:"$100",status:"Pending"},{id:5,orderId:"ORD124",from:"User C",to:"User D",date:"2024-12-25",time:"11:00 AM",amount:"$200",status:"Approved"},{id:6,orderId:"ORD125",from:"User E",to:"User F",date:"2024-12-24",time:"12:00 PM",amount:"$150",status:"Declined"}],i=[{_id:1,user:{_id:"user1",username:"john_doe"},withdrawAmount:500,withdrawFee:5,withdrawBank:{bankName:"Bank A"},createdAt:"2024-12-15T12:00:00Z",status:"pending"},{_id:2,user:{_id:"user2",username:"jane_doe"},withdrawAmount:1e3,withdrawFee:10,withdrawBank:{bankName:"Bank B",accountNo:"987654321",accountHolder:"Jane Doe"},createdAt:"2024-12-16T15:00:00Z",status:"approved"},{_id:3,user:{_id:"user3",username:"alice_smith"},withdrawAmount:1500,withdrawFee:15,withdrawBank:{bankName:"Bank C",accountNo:"123456789",accountHolder:"Alice Smith"},createdAt:"2024-12-17T10:30:00Z",status:"declined"},{_id:4,user:{_id:"user4",username:"bob_jones"},withdrawAmount:2500,withdrawFee:20,withdrawBank:{bankName:"Bank D",accountNo:"987654322",accountHolder:"Bob Jones"},createdAt:"2024-12-18T14:00:00Z",status:"pending"},{_id:5,user:{_id:"user5",username:"mary_brown"},withdrawAmount:300,withdrawFee:3,withdrawBank:{bankName:"Bank E"},createdAt:"2024-12-19T16:30:00Z",status:"approved"},{_id:6,user:{_id:"user6",username:"david_lee"},withdrawAmount:1200,withdrawFee:12,withdrawBank:{bankName:"Bank F",accountNo:"112233445",accountHolder:"David Lee"},createdAt:"2024-12-20T08:00:00Z",status:"declined"},{_id:7,user:{_id:"user7",username:"susan_taylor"},withdrawAmount:1800,withdrawFee:18,withdrawBank:{bankName:"Bank G",accountNo:"334455667",accountHolder:"Susan Taylor"},createdAt:"2024-12-21T11:00:00Z",status:"pending"},{_id:8,user:{_id:"user8",username:"richard_wilson"},withdrawAmount:2200,withdrawFee:22,withdrawBank:{bankName:"Bank H",accountNo:"998877665",accountHolder:"Richard Wilson"},createdAt:"2024-12-22T13:00:00Z",status:"approved"}],r=[{userName:"John Doe",amount:"$120.00",paymentMethod:"Credit Card",status:"Paid",date:"2024-12-20"},{userName:"Jane Smith",amount:"$85.00",paymentMethod:"PayPal",status:"Unpaid",date:"2024-12-19"},{userName:"Alex Johnson",amount:"$200.00",paymentMethod:"Bank Transfer",status:"Paid",date:"2024-12-18"},{userName:"Emily Davis",amount:"$150.00",paymentMethod:"Crypto",status:"Unpaid",date:"2024-12-17"}],s=[{id:"1",name:"223939399393",documentType:"Passport"},{id:"2",name:"3948439393939",documentType:"ID Card"},{id:"3",name:"3948439393939",documentType:"Driver's License"}],d=[{id:1,title:"Item One",description:"This is the description of item one."},{id:2,title:"Item Two",description:"This is the description of item two."},{id:3,title:"Item Three",description:"This is the description of item three."}],m=[{id:1,rank:1,country:"Russia",members:"100 k",status:"Pending"},{id:2,rank:2,country:"China",members:"100 k",status:"Pending"},{id:3,rank:3,country:"India",members:"100 k",status:"Pending"},{id:4,rank:4,country:"South Africa",members:"100 k",status:"Pending"},{id:5,rank:5,country:"Pakistan",members:"100 k",status:"Pending"}],l=[{id:1,name:"John Doe",email:"johndoe@example.com"},{id:2,name:"Jane Smith",email:"janesmith@example.com"},{id:3,name:"Alice Johnson",email:"alicejohnson@example.com"},{id:4,name:"Bob Brown",email:"bobbrown@example.com"},{id:5,name:"Charlie Williams",email:"charliewilliams@example.com"},{id:6,name:"David Wilson",email:"davidwilson@example.com"},{id:7,name:"Emily Clark",email:"emilyclark@example.com"},{id:8,name:"Frank Harris",email:"frankharris@example.com"},{id:9,name:"Grace Lewis",email:"gracelewis@example.com"},{id:10,name:"Henry Walker",email:"henrywalker@example.com"},{id:11,name:"Ivy Scott",email:"ivyscott@example.com"},{id:12,name:"Jack Green",email:"jackgreen@example.com"},{id:13,name:"Karen Adams",email:"karenadams@example.com"},{id:14,name:"Liam Baker",email:"liambaker@example.com"},{id:15,name:"Mia Nelson",email:"mianelson@example.com"},{id:16,name:"Nora Carter",email:"noracarter@example.com"},{id:17,name:"Oliver Mitchell",email:"olivermitchell@example.com"},{id:18,name:"Paul Perez",email:"paulperez@example.com"},{id:19,name:"Quincy Hall",email:"quincyhall@example.com"},{id:20,name:"Rachel Young",email:"rachelyoung@example.com"}],c=[{id:1,username:"John Doe",email:"johndoe@example.com",password:"*****"},{id:2,username:"Jane Smith",email:"janesmith@example.com",password:"*****"},{id:3,username:"Alice Johnson",email:"alicejohnson@example.com",password:"*****"}],u=[{id:1,fullname:"John Doe",username:"john_doe",email:"john.doe@example.com",phone:"123-456-7890",level:"1st",country:"USA",joined:"2024-01-01",totalTradeAccount:"1000",totalAutoTradeAccount:"1000",status:"active",totalDeposit:5e3},{id:2,fullname:"John Doe",username:"jane_doe",email:"jane.doe@example.com",phone:"987-654-3210",level:"2nd",country:"Canada",joined:"2023-12-01",totalTradeAccount:"1000",totalAutoTradeAccount:"1000",status:"inactive",totalDeposit:3e3},{id:3,fullname:"John Doe",username:"alex_smith",email:"alex.smith@example.com",phone:"123-987-6543",level:"3rd",country:"UK",joined:"2024-02-15",totalTradeAccount:"1000",totalAutoTradeAccount:"1000",status:"active",totalDeposit:2e3},{id:4,fullname:"John Doe",username:"maria_jones",email:"maria.jones@example.com",phone:"456-789-1234",level:"1st",country:"Australia",joined:"2023-11-20",totalTradeAccount:"1000",totalAutoTradeAccount:"1000",status:"active",totalDeposit:7e3},{id:5,fullname:"John Doe",username:"robert_brown",email:"robert.brown@example.com",phone:"789-123-4567",level:"2nd",country:"India",joined:"2023-10-10",totalTradeAccount:"1000",totalAutoTradeAccount:"1000",status:"inactive",totalDeposit:1500},{id:6,fullname:"John Doe",username:"lucy_clark",email:"lucy.clark@example.com",phone:"321-654-9870",level:"3rd",country:"Germany",joined:"2024-03-05",totalTradeAccount:"1000",totalAutoTradeAccount:"1000",status:"active",totalDeposit:4e3},{id:7,fullname:"John Doe",username:"mike_davis",email:"mike.davis@example.com",phone:"654-321-0987",level:"1st",country:"France",joined:"2023-09-25",totalTradeAccount:"1000",totalAutoTradeAccount:"1000",status:"inactive",totalDeposit:2500},{id:8,fullname:"John Doe",username:"susan_taylor",email:"susan.taylor@example.com",phone:"987-654-1230",level:"2nd",country:"Japan",joined:"2023-08-15",totalTradeAccount:"1000",totalAutoTradeAccount:"1000",status:"active",totalDeposit:6e3}],p=[{_id:"1",action:"+",amount:100,createdAt:"2024-12-01T08:30:00Z",description:"Deposit from bank transfer."},{_id:"2",action:"-",amount:50,createdAt:"2024-12-02T10:15:00Z",description:"Payment for service X."},{_id:"3",action:"+",amount:200,createdAt:"2024-12-03T14:45:00Z",description:"Refund for overpayment."}];export{c as A,m as G,d as I,l as S,p as W,n as a,a as b,o as c,r as d,u as e,s as k,t,e as u,i as w};
