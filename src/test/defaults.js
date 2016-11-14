// to test without connecting
angular.module('angularGapiAnalyticsreporting')
  .constant('appConstants', {
    accountsTree:
    [
      {
        'name': 'Demo Account (Beta)',
        'id': '54516992',
        'properties': [
          {
            'name': 'Google Merchandise Store',
            'id': 'UA-54516992-1',
            'views': [
              {
                'name': '1 Master View',
                'id': '92320289'
              },
              {
                'name': '2 Test View',
                'id': '92324711'
              },
              {
                'name': '3 Raw Data View',
                'id': '90822334'
              }
            ]
          }
        ]
      }
    ],
    metadata:
    [
      {
        "id": "ga:userType",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "A boolean, either New Visitor or Returning Visitor, indicating if the users are new or returning.",
        "group": "User",
        "type": "DIMENSION",
        "uiName": "User Type",
        "calculation": "none"
      },
      {
        "id": "ga:sessionCount",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The session index for a user. Each session from a unique user will get its own incremental index starting from 1 for the first session. Subsequent sessions do not change previous session indices. For example, if a user has 4 sessions to the website, sessionCount for that user will have 4 distinct values of '1' through '4'.",
        "group": "User",
        "type": "DIMENSION",
        "uiName": "Count of Sessions",
        "calculation": "none"
      },
      {
        "id": "ga:daysSinceLastSession",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The number of days elapsed since users last visited the property, used to calculate user loyalty.",
        "group": "User",
        "type": "DIMENSION",
        "uiName": "Days Since Last Session",
        "calculation": "none"
      },
      {
        "id": "ga:userDefinedValue",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The value provided when defining custom user segments for the property.",
        "group": "User",
        "type": "DIMENSION",
        "uiName": "User Defined Value",
        "calculation": "none"
      },
      {
        "id": "ga:users",
        "dataType": "INTEGER",
        "description": "The total number of users for the requested time period.",
        "group": "User",
        "type": "METRIC",
        "uiName": "Users",
        "calculation": "none"
      },
      {
        "id": "ga:newUsers",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of users whose session was marked as a first-time session.",
        "group": "User",
        "type": "METRIC",
        "uiName": "New Users",
        "calculation": "none"
      },
      {
        "id": "ga:percentNewSessions",
        "dataType": "PERCENT",
        "description": "The percentage of sessions by users who had never visited the property before.",
        "group": "User",
        "type": "METRIC",
        "uiName": "% New Sessions",
        "calculation": "ga:newUsers / ga:sessions"
      },
      {
        "id": "ga:1dayUsers",
        "dataType": "INTEGER",
        "description": "Total number of 1-day active users for each day in the requested time period. At least one of ga:nthDay, ga:date, or ga:day must be specified as a dimension to query this metric. For a given date, the returned value will be the total number of unique users for the 1-day period ending on the given date.",
        "group": "User",
        "type": "METRIC",
        "uiName": "1 Day Active Users",
        "calculation": "none"
      },
      {
        "id": "ga:7dayUsers",
        "dataType": "INTEGER",
        "description": "Total number of 7-day active users for each day in the requested time period. At least one of ga:nthDay, ga:date, or ga:day must be specified as a dimension to query this metric. For a given date, the returned value will be the total number of unique users for the 7-day period ending on the given date.",
        "group": "User",
        "type": "METRIC",
        "uiName": "7 Day Active Users",
        "calculation": "none"
      },
      {
        "id": "ga:14dayUsers",
        "dataType": "INTEGER",
        "description": "Total number of 14-day active users for each day in the requested time period. At least one of ga:nthDay, ga:date, or ga:day must be specified as a dimension to query this metric. For a given date, the returned value will be the total number of unique users for the 14-day period ending on the given date.",
        "group": "User",
        "type": "METRIC",
        "uiName": "14 Day Active Users",
        "calculation": "none"
      },
      {
        "id": "ga:30dayUsers",
        "dataType": "INTEGER",
        "description": "Total number of 30-day active users for each day in the requested time period. At least one of ga:nthDay, ga:date, or ga:day must be specified as a dimension to query this metric. For a given date, the returned value will be the total number of unique users for the 30-day period ending on the given date.",
        "group": "User",
        "type": "METRIC",
        "uiName": "30 Day Active Users",
        "calculation": "none"
      },
      {
        "id": "ga:sessionDurationBucket",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The length (returned as a string) of a session measured in seconds and reported in second increments.",
        "group": "Session",
        "type": "DIMENSION",
        "uiName": "Session Duration",
        "calculation": "none"
      },
      {
        "id": "ga:sessions",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The total number of sessions.",
        "group": "Session",
        "type": "METRIC",
        "uiName": "Sessions",
        "calculation": "none"
      },
      {
        "id": "ga:bounces",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The total number of single page (or single interaction hit) sessions for the property.",
        "group": "Session",
        "type": "METRIC",
        "uiName": "Bounces",
        "calculation": "none"
      },
      {
        "id": "ga:bounceRate",
        "dataType": "PERCENT",
        "description": "The percentage of single-page session (i.e., session in which the person left the property from the first page).",
        "group": "Session",
        "type": "METRIC",
        "uiName": "Bounce Rate",
        "calculation": "ga:bounces / ga:sessions"
      },
      {
        "id": "ga:sessionDuration",
        "allowedInSegments": "true",
        "dataType": "TIME",
        "description": "Total duration (in seconds) of users' sessions.",
        "group": "Session",
        "type": "METRIC",
        "uiName": "Session Duration",
        "calculation": "none"
      },
      {
        "id": "ga:avgSessionDuration",
        "dataType": "TIME",
        "description": "The average duration (in seconds) of users' sessions.",
        "group": "Session",
        "type": "METRIC",
        "uiName": "Avg. Session Duration",
        "calculation": "ga:sessionDuration / ga:sessions"
      },
      {
        "id": "ga:referralPath",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The path of the referring URL (e.g., document.referrer). If someone places on their webpage a link to the property, this is the path of the page containing the referring link.",
        "group": "Traffic Sources",
        "type": "DIMENSION",
        "uiName": "Referral Path",
        "calculation": "none"
      },
      {
        "id": "ga:fullReferrer",
        "dataType": "STRING",
        "description": "The full referring URL including the hostname and path.",
        "group": "Traffic Sources",
        "type": "DIMENSION",
        "uiName": "Full Referrer",
        "calculation": "none"
      },
      {
        "id": "ga:campaign",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "For manual campaign tracking, it is the value of the utm_campaign campaign tracking parameter. For AdWords autotagging, it is the name(s) of the online ad campaign(s) you use for the property. If you use neither, its value is (not set).",
        "group": "Traffic Sources",
        "type": "DIMENSION",
        "uiName": "Campaign",
        "calculation": "none"
      },
      {
        "id": "ga:source",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The source of referrals. For manual campaign tracking, it is the value of the utm_source campaign tracking parameter. For AdWords autotagging, it is google. If you use neither, it is the domain of the source (e.g., document.referrer) referring the users. It may also contain a port address. If users arrived without a referrer, its value is (direct).",
        "group": "Traffic Sources",
        "type": "DIMENSION",
        "uiName": "Source",
        "calculation": "none"
      },
      {
        "id": "ga:medium",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The type of referrals. For manual campaign tracking, it is the value of the utm_medium campaign tracking parameter. For AdWords autotagging, it is cpc. If users came from a search engine detected by Google Analytics, it is organic. If the referrer is not a search engine, it is referral. If users came directly to the property and document.referrer is empty, its value is (none).",
        "group": "Traffic Sources",
        "type": "DIMENSION",
        "uiName": "Medium",
        "calculation": "none"
      },
      {
        "id": "ga:sourceMedium",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Combined values of ga:source and ga:medium.",
        "group": "Traffic Sources",
        "type": "DIMENSION",
        "uiName": "Source / Medium",
        "calculation": "none"
      },
      {
        "id": "ga:keyword",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "For manual campaign tracking, it is the value of the utm_term campaign tracking parameter. For AdWords autotagging or when users use organic search to reach the property, it contains the keywords used to reach the property. Otherwise its value is (not set).",
        "group": "Traffic Sources",
        "type": "DIMENSION",
        "uiName": "Keyword",
        "calculation": "none"
      },
      {
        "id": "ga:adContent",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "For manual campaign tracking, it is the value of the utm_content campaign tracking parameter. For AdWords autotagging, it is the first line of the text for the online Ad campaign. If you use mad libs for the AdWords content, it contains the keywords you provided for the mad libs keyword match. If you use none of the above, its value is (not set).",
        "group": "Traffic Sources",
        "type": "DIMENSION",
        "uiName": "Ad Content",
        "calculation": "none"
      },
      {
        "id": "ga:socialNetwork",
        "dataType": "STRING",
        "description": "The social network name. This can be related to the referring social network for traffic sources, or to the social network for social data hub activities; e.g., Google+, Blogger.",
        "group": "Traffic Sources",
        "type": "DIMENSION",
        "uiName": "Social Network",
        "calculation": "none"
      },
      {
        "id": "ga:hasSocialSourceReferral",
        "dataType": "STRING",
        "description": "A boolean, either Yes or No, indicates whether sessions to the property are from a social source.",
        "group": "Traffic Sources",
        "type": "DIMENSION",
        "uiName": "Social Source Referral",
        "calculation": "none"
      },
      {
        "id": "ga:organicSearches",
        "dataType": "INTEGER",
        "description": "The number of organic searches happened in a session. This metric is search engine agnostic.",
        "group": "Traffic Sources",
        "type": "METRIC",
        "uiName": "Organic Searches",
        "calculation": "none"
      },
      {
        "id": "ga:adGroup",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The name of the AdWords ad group.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "Ad Group",
        "calculation": "none"
      },
      {
        "id": "ga:adSlot",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The location (Top, RHS, or not set) of the advertisement on the hosting page.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "Ad Slot",
        "calculation": "none"
      },
      {
        "id": "ga:adDistributionNetwork",
        "dataType": "STRING",
        "description": "The network (Content, Search, Search partners, etc.) used to deliver the ads.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "Ad Distribution Network",
        "calculation": "none"
      },
      {
        "id": "ga:adMatchType",
        "dataType": "STRING",
        "description": "The match type (Phrase, Exact, Broad, etc.) applied for users' search term. Ads on the content network are identified as \"Content network\". For details, see https://support.google.com/adwords/answer/2472708?hl=en.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "Query Match Type",
        "calculation": "none"
      },
      {
        "id": "ga:adKeywordMatchType",
        "dataType": "STRING",
        "description": "The match type (Phrase, Exact, or Broad) applied to the keywords. For details, see https://support.google.com/adwords/answer/2472708.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "Keyword Match Type",
        "calculation": "none"
      },
      {
        "id": "ga:adMatchedQuery",
        "dataType": "STRING",
        "description": "The search query that triggered impressions.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "Search Query",
        "calculation": "none"
      },
      {
        "id": "ga:adPlacementDomain",
        "dataType": "STRING",
        "description": "The domain where the ads on the content network were placed.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "Placement Domain",
        "calculation": "none"
      },
      {
        "id": "ga:adPlacementUrl",
        "dataType": "STRING",
        "description": "The URL where the ads were placed on the content network.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "Placement URL",
        "calculation": "none"
      },
      {
        "id": "ga:adFormat",
        "dataType": "STRING",
        "description": "The AdWords ad format (Text, Image, Flash, Video, etc.).",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "Ad Format",
        "calculation": "none"
      },
      {
        "id": "ga:adTargetingType",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "This (keyword, placement, or vertical targeting) indicates how the AdWords ads were targeted.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "Targeting Type",
        "calculation": "none"
      },
      {
        "id": "ga:adTargetingOption",
        "dataType": "STRING",
        "description": "It is Automatic placements or Managed placements, indicating how the ads were managed on the content network.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "Placement Type",
        "calculation": "none"
      },
      {
        "id": "ga:adDisplayUrl",
        "dataType": "STRING",
        "description": "The URL the AdWords ads displayed.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "Display URL",
        "calculation": "none"
      },
      {
        "id": "ga:adDestinationUrl",
        "dataType": "STRING",
        "description": "The URL to which the AdWords ads referred traffic.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "Destination URL",
        "calculation": "none"
      },
      {
        "id": "ga:adwordsCustomerID",
        "dataType": "STRING",
        "description": "Customer's AdWords ID, corresponding to AdWords API AccountInfo.customerId.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "AdWords Customer ID",
        "calculation": "none"
      },
      {
        "id": "ga:adwordsCampaignID",
        "dataType": "STRING",
        "description": "AdWords API Campaign.id.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "AdWords Campaign ID",
        "calculation": "none"
      },
      {
        "id": "ga:adwordsAdGroupID",
        "dataType": "STRING",
        "description": "AdWords API AdGroup.id.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "AdWords Ad Group ID",
        "calculation": "none"
      },
      {
        "id": "ga:adwordsCreativeID",
        "dataType": "STRING",
        "description": "AdWords API Ad.id.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "AdWords Creative ID",
        "calculation": "none"
      },
      {
        "id": "ga:adwordsCriteriaID",
        "dataType": "STRING",
        "description": "AdWords API Criterion.id. The geographical targeting Criteria IDs are listed at https://developers.google.com/analytics/devguides/collection/protocol/v1/geoid.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "AdWords Criteria ID",
        "calculation": "none"
      },
      {
        "id": "ga:impressions",
        "dataType": "INTEGER",
        "description": "Total number of campaign impressions.",
        "group": "Adwords",
        "type": "METRIC",
        "uiName": "Impressions",
        "calculation": "none"
      },
      {
        "id": "ga:adClicks",
        "dataType": "INTEGER",
        "description": "Total number of times users have clicked on an ad to reach the property.",
        "group": "Adwords",
        "type": "METRIC",
        "uiName": "Clicks",
        "calculation": "none"
      },
      {
        "id": "ga:adCost",
        "dataType": "CURRENCY",
        "description": "Derived cost for the advertising campaign. Its currency is the one you set in the AdWords account.",
        "group": "Adwords",
        "type": "METRIC",
        "uiName": "Cost",
        "calculation": "none"
      },
      {
        "id": "ga:CPM",
        "dataType": "CURRENCY",
        "description": "Cost per thousand impressions.",
        "group": "Adwords",
        "type": "METRIC",
        "uiName": "CPM",
        "calculation": "ga:adCost / (ga:impressions / 1000)"
      },
      {
        "id": "ga:CPC",
        "dataType": "CURRENCY",
        "description": "Cost to advertiser per click.",
        "group": "Adwords",
        "type": "METRIC",
        "uiName": "CPC",
        "calculation": "ga:adCost / ga:adClicks"
      },
      {
        "id": "ga:CTR",
        "dataType": "PERCENT",
        "description": "Click-through-rate for the ad. This is equal to the number of clicks divided by the number of impressions for the ad (e.g., how many times users clicked on one of the ads where that ad appeared).",
        "group": "Adwords",
        "type": "METRIC",
        "uiName": "CTR",
        "calculation": "ga:adClicks / ga:impressions"
      },
      {
        "id": "ga:costPerTransaction",
        "dataType": "CURRENCY",
        "description": "The cost per transaction for the property.",
        "group": "Adwords",
        "type": "METRIC",
        "uiName": "Cost per Transaction",
        "calculation": "(ga:adCost) / (ga:transactions)"
      },
      {
        "id": "ga:costPerGoalConversion",
        "dataType": "CURRENCY",
        "description": "The cost per goal conversion for the property.",
        "group": "Adwords",
        "type": "METRIC",
        "uiName": "Cost per Goal Conversion",
        "calculation": "(ga:adCost) / (ga:goalCompletionsAll)"
      },
      {
        "id": "ga:costPerConversion",
        "dataType": "CURRENCY",
        "description": "The cost per conversion (including ecommerce and goal conversions) for the property.",
        "group": "Adwords",
        "type": "METRIC",
        "uiName": "Cost per Conversion",
        "calculation": "(ga:adCost) / (ga:transactions  +  ga:goalCompletionsAll)"
      },
      {
        "id": "ga:RPC",
        "dataType": "CURRENCY",
        "description": "RPC or revenue-per-click, the average revenue (from ecommerce sales and/or goal value) you received for each click on one of the search ads.",
        "group": "Adwords",
        "type": "METRIC",
        "uiName": "RPC",
        "calculation": "(ga:transactionRevenue + ga:goalValueAll) / ga:adClicks"
      },
      {
        "id": "ga:ROAS",
        "dataType": "PERCENT",
        "description": "Return On Ad Spend (ROAS) is the total transaction revenue and goal value divided by derived advertising cost.",
        "group": "Adwords",
        "type": "METRIC",
        "uiName": "ROAS",
        "calculation": "(ga:transactionRevenue + ga:goalValueAll) / ga:adCost"
      },
      {
        "id": "ga:adQueryWordCount",
        "dataType": "STRING",
        "description": "The number of words in the search query.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "Query Word Count",
        "calculation": "none"
      },
      {
        "id": "ga:goalCompletionLocation",
        "dataType": "STRING",
        "description": "The page path or screen name that matched any destination type goal completion.",
        "group": "Goal Conversions",
        "type": "DIMENSION",
        "uiName": "Goal Completion Location",
        "calculation": "none"
      },
      {
        "id": "ga:goalPreviousStep1",
        "dataType": "STRING",
        "description": "The page path or screen name that matched any destination type goal, one step prior to the goal completion location.",
        "group": "Goal Conversions",
        "type": "DIMENSION",
        "uiName": "Goal Previous Step - 1",
        "calculation": "none"
      },
      {
        "id": "ga:goalPreviousStep2",
        "dataType": "STRING",
        "description": "The page path or screen name that matched any destination type goal, two steps prior to the goal completion location.",
        "group": "Goal Conversions",
        "type": "DIMENSION",
        "uiName": "Goal Previous Step - 2",
        "calculation": "none"
      },
      {
        "id": "ga:goalPreviousStep3",
        "dataType": "STRING",
        "description": "The page path or screen name that matched any destination type goal, three steps prior to the goal completion location.",
        "group": "Goal Conversions",
        "type": "DIMENSION",
        "uiName": "Goal Previous Step - 3",
        "calculation": "none"
      },
      {
        "id": "ga:goalXXStarts",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The total number of starts for the requested goal number.",
        "group": "Goal Conversions",
        "type": "METRIC",
        "uiName": "Goal XX Starts",
        "calculation": "none"
      },
      {
        "id": "ga:goalStartsAll",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Total number of starts for all goals defined in the profile.",
        "group": "Goal Conversions",
        "type": "METRIC",
        "uiName": "Goal Starts",
        "calculation": "none"
      },
      {
        "id": "ga:goalXXCompletions",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The total number of completions for the requested goal number.",
        "group": "Goal Conversions",
        "type": "METRIC",
        "uiName": "Goal XX Completions",
        "calculation": "none"
      },
      {
        "id": "ga:goalCompletionsAll",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Total number of completions for all goals defined in the profile.",
        "group": "Goal Conversions",
        "type": "METRIC",
        "uiName": "Goal Completions",
        "calculation": "none"
      },
      {
        "id": "ga:goalXXValue",
        "allowedInSegments": "true",
        "dataType": "CURRENCY",
        "description": "The total numeric value for the requested goal number.",
        "group": "Goal Conversions",
        "type": "METRIC",
        "uiName": "Goal XX Value",
        "calculation": "none"
      },
      {
        "id": "ga:goalValueAll",
        "allowedInSegments": "true",
        "dataType": "CURRENCY",
        "description": "Total numeric value for all goals defined in the profile.",
        "group": "Goal Conversions",
        "type": "METRIC",
        "uiName": "Goal Value",
        "calculation": "none"
      },
      {
        "id": "ga:goalValuePerSession",
        "dataType": "CURRENCY",
        "description": "The average goal value of a session.",
        "group": "Goal Conversions",
        "type": "METRIC",
        "uiName": "Per Session Goal Value",
        "calculation": "ga:goalValueAll / ga:sessions"
      },
      {
        "id": "ga:goalXXConversionRate",
        "dataType": "PERCENT",
        "description": "Percentage of sessions resulting in a conversion to the requested goal number.",
        "group": "Goal Conversions",
        "type": "METRIC",
        "uiName": "Goal XX Conversion Rate",
        "calculation": "ga:goalXXCompletions / ga:sessions"
      },
      {
        "id": "ga:goalConversionRateAll",
        "dataType": "PERCENT",
        "description": "The percentage of sessions which resulted in a conversion to at least one of the goals.",
        "group": "Goal Conversions",
        "type": "METRIC",
        "uiName": "Goal Conversion Rate",
        "calculation": "ga:goalCompletionsAll / ga:sessions"
      },
      {
        "id": "ga:goalXXAbandons",
        "dataType": "INTEGER",
        "description": "The number of times users started conversion activity on the requested goal number without actually completing it.",
        "group": "Goal Conversions",
        "type": "METRIC",
        "uiName": "Goal XX Abandoned Funnels",
        "calculation": "(ga:goalXXStarts - ga:goalXXCompletions)"
      },
      {
        "id": "ga:goalAbandonsAll",
        "dataType": "INTEGER",
        "description": "The overall number of times users started goals without actually completing them.",
        "group": "Goal Conversions",
        "type": "METRIC",
        "uiName": "Abandoned Funnels",
        "calculation": "(ga:goalStartsAll - ga:goalCompletionsAll)"
      },
      {
        "id": "ga:goalXXAbandonRate",
        "dataType": "PERCENT",
        "description": "The rate at which the requested goal number was abandoned.",
        "group": "Goal Conversions",
        "type": "METRIC",
        "uiName": "Goal XX Abandonment Rate",
        "calculation": "((ga:goalXXStarts - ga:goalXXCompletions)) / (ga:goalXXStarts)"
      },
      {
        "id": "ga:goalAbandonRateAll",
        "dataType": "PERCENT",
        "description": "Goal abandonment rate.",
        "group": "Goal Conversions",
        "type": "METRIC",
        "uiName": "Total Abandonment Rate",
        "calculation": "((ga:goalStartsAll - ga:goalCompletionsAll)) / (ga:goalStartsAll)"
      },
      {
        "id": "ga:browser",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The name of users' browsers, for example, Internet Explorer or Firefox.",
        "group": "Platform or Device",
        "type": "DIMENSION",
        "uiName": "Browser",
        "calculation": "none"
      },
      {
        "id": "ga:browserVersion",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The version of users' browsers, for example, 2.0.0.14.",
        "group": "Platform or Device",
        "type": "DIMENSION",
        "uiName": "Browser Version",
        "calculation": "none"
      },
      {
        "id": "ga:operatingSystem",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Users' operating system, for example, Windows, Linux, Macintosh, or iOS.",
        "group": "Platform or Device",
        "type": "DIMENSION",
        "uiName": "Operating System",
        "calculation": "none"
      },
      {
        "id": "ga:operatingSystemVersion",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The version of users' operating system, i.e., XP for Windows, PPC for Macintosh.",
        "group": "Platform or Device",
        "type": "DIMENSION",
        "uiName": "Operating System Version",
        "calculation": "none"
      },
      {
        "id": "ga:mobileDeviceBranding",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Mobile manufacturer or branded name.",
        "group": "Platform or Device",
        "type": "DIMENSION",
        "uiName": "Mobile Device Branding",
        "calculation": "none"
      },
      {
        "id": "ga:mobileDeviceModel",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Mobile device model.",
        "group": "Platform or Device",
        "type": "DIMENSION",
        "uiName": "Mobile Device Model",
        "calculation": "none"
      },
      {
        "id": "ga:mobileInputSelector",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Selector (e.g., touchscreen, joystick, clickwheel, stylus) used on the mobile device.",
        "group": "Platform or Device",
        "type": "DIMENSION",
        "uiName": "Mobile Input Selector",
        "calculation": "none"
      },
      {
        "id": "ga:mobileDeviceInfo",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The branding, model, and marketing name used to identify the mobile device.",
        "group": "Platform or Device",
        "type": "DIMENSION",
        "uiName": "Mobile Device Info",
        "calculation": "none"
      },
      {
        "id": "ga:mobileDeviceMarketingName",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The marketing name used for the mobile device.",
        "group": "Platform or Device",
        "type": "DIMENSION",
        "uiName": "Mobile Device Marketing Name",
        "calculation": "none"
      },
      {
        "id": "ga:deviceCategory",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The type of device: desktop, tablet, or mobile.",
        "group": "Platform or Device",
        "type": "DIMENSION",
        "uiName": "Device Category",
        "calculation": "none"
      },
      {
        "id": "ga:continent",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Users' continent, derived from users' IP addresses or Geographical IDs.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Continent",
        "calculation": "none"
      },
      {
        "id": "ga:subContinent",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Users' sub-continent, derived from their IP addresses or Geographical IDs. For example, Polynesia or Northern Europe.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Sub Continent",
        "calculation": "none"
      },
      {
        "id": "ga:country",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Users' country, derived from their IP addresses or Geographical IDs.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Country",
        "calculation": "none"
      },
      {
        "id": "ga:region",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Users' region, derived from their IP addresses or Geographical IDs. In U.S., a region is a state, New York, for example.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Region",
        "calculation": "none"
      },
      {
        "id": "ga:metro",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The Designated Market Area (DMA) from where traffic arrived.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Metro",
        "calculation": "none"
      },
      {
        "id": "ga:city",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Users' city, derived from their IP addresses or Geographical IDs.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "City",
        "calculation": "none"
      },
      {
        "id": "ga:latitude",
        "dataType": "STRING",
        "description": "The approximate latitude of users' city, derived from their IP addresses or Geographical IDs. Locations north of the equator have positive latitudes and locations south of the equator have negative latitudes.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Latitude",
        "calculation": "none"
      },
      {
        "id": "ga:longitude",
        "dataType": "STRING",
        "description": "The approximate latitude of users' city, derived from their IP addresses or Geographical IDs. Locations north of the equator have positive latitudes and locations south of the equator have negative latitudes.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Longitude",
        "calculation": "none"
      },
      {
        "id": "ga:networkDomain",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The domain name of users' ISP, derived from the domain name registered to the ISP's IP address.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Network Domain",
        "calculation": "none"
      },
      {
        "id": "ga:networkLocation",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The names of the service providers used to reach the property. For example, if most users of the website come via the major cable internet service providers, its value will be these service providers' names.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Service Provider",
        "calculation": "none"
      },
      {
        "id": "ga:flashVersion",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The version of Flash, including minor versions, supported by users' browsers.",
        "group": "System",
        "type": "DIMENSION",
        "uiName": "Flash Version",
        "calculation": "none"
      },
      {
        "id": "ga:javaEnabled",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "A boolean, either Yes or No, indicating whether Java is enabled in users' browsers.",
        "group": "System",
        "type": "DIMENSION",
        "uiName": "Java Support",
        "calculation": "none"
      },
      {
        "id": "ga:language",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The language, in ISO-639 code format (e.g., en-gb for British English), provided by the HTTP Request for the browser.",
        "group": "System",
        "type": "DIMENSION",
        "uiName": "Language",
        "calculation": "none"
      },
      {
        "id": "ga:screenColors",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The color depth of users' monitors, retrieved from the DOM of users' browsers. For example, 4-bit, 8-bit, 24-bit, or undefined-bit.",
        "group": "System",
        "type": "DIMENSION",
        "uiName": "Screen Colors",
        "calculation": "none"
      },
      {
        "id": "ga:sourcePropertyDisplayName",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Source property display name of roll-up properties. This is valid for only roll-up properties.",
        "group": "System",
        "type": "DIMENSION",
        "uiName": "Source Property Display Name",
        "calculation": "none"
      },
      {
        "id": "ga:sourcePropertyTrackingId",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Source property tracking ID of roll-up properties. This is valid for only roll-up properties.",
        "group": "System",
        "type": "DIMENSION",
        "uiName": "Source Property Tracking ID",
        "calculation": "none"
      },
      {
        "id": "ga:screenResolution",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Resolution of users' screens, for example, 1024x738.",
        "group": "System",
        "type": "DIMENSION",
        "uiName": "Screen Resolution",
        "calculation": "none"
      },
      {
        "id": "ga:hostname",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The hostname from which the tracking request was made.",
        "group": "Page Tracking",
        "type": "DIMENSION",
        "uiName": "Hostname",
        "calculation": "none"
      },
      {
        "id": "ga:pagePath",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "A page on the website specified by path and/or query parameters. Use this with hostname to get the page's full URL.",
        "group": "Page Tracking",
        "type": "DIMENSION",
        "uiName": "Page",
        "calculation": "none"
      },
      {
        "id": "ga:pagePathLevel1",
        "dataType": "STRING",
        "description": "This dimension rolls up all the page paths in the first hierarchical level in pagePath.",
        "group": "Page Tracking",
        "type": "DIMENSION",
        "uiName": "Page path level 1",
        "calculation": "none"
      },
      {
        "id": "ga:pagePathLevel2",
        "dataType": "STRING",
        "description": "This dimension rolls up all the page paths in the second hierarchical level in pagePath.",
        "group": "Page Tracking",
        "type": "DIMENSION",
        "uiName": "Page path level 2",
        "calculation": "none"
      },
      {
        "id": "ga:pagePathLevel3",
        "dataType": "STRING",
        "description": "This dimension rolls up all the page paths in the third hierarchical level in pagePath.",
        "group": "Page Tracking",
        "type": "DIMENSION",
        "uiName": "Page path level 3",
        "calculation": "none"
      },
      {
        "id": "ga:pagePathLevel4",
        "dataType": "STRING",
        "description": "This dimension rolls up all the page paths into hierarchical levels. Up to 4 pagePath levels maybe specified. All additional levels in the pagePath hierarchy are also rolled up in this dimension.",
        "group": "Page Tracking",
        "type": "DIMENSION",
        "uiName": "Page path level 4",
        "calculation": "none"
      },
      {
        "id": "ga:pageTitle",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The page's title. Multiple pages might have the same page title.",
        "group": "Page Tracking",
        "type": "DIMENSION",
        "uiName": "Page Title",
        "calculation": "none"
      },
      {
        "id": "ga:landingPagePath",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The first page in users' sessions, or the landing page.",
        "group": "Page Tracking",
        "type": "DIMENSION",
        "uiName": "Landing Page",
        "calculation": "none"
      },
      {
        "id": "ga:secondPagePath",
        "dataType": "STRING",
        "description": "The second page in users' sessions.",
        "group": "Page Tracking",
        "type": "DIMENSION",
        "uiName": "Second Page",
        "calculation": "none"
      },
      {
        "id": "ga:exitPagePath",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The last page or exit page in users' sessions.",
        "group": "Page Tracking",
        "type": "DIMENSION",
        "uiName": "Exit Page",
        "calculation": "none"
      },
      {
        "id": "ga:previousPagePath",
        "dataType": "STRING",
        "description": "A page visited before another page on the same property, typically used with the pagePath dimension.",
        "group": "Page Tracking",
        "type": "DIMENSION",
        "uiName": "Previous Page Path",
        "calculation": "none"
      },
      {
        "id": "ga:pageDepth",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The number of pages visited by users during a session. The value is a histogram that counts pageviews across a range of possible values. In this calculation, all sessions will have at least one pageview, and some percentage of sessions will have more.",
        "group": "Page Tracking",
        "type": "DIMENSION",
        "uiName": "Page Depth",
        "calculation": "none"
      },
      {
        "id": "ga:pageValue",
        "dataType": "CURRENCY",
        "description": "The average value of this page or set of pages, which is equal to (ga:transactionRevenue + ga:goalValueAll) / ga:uniquePageviews.",
        "group": "Page Tracking",
        "type": "METRIC",
        "uiName": "Page Value",
        "calculation": "none"
      },
      {
        "id": "ga:entrances",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of entrances to the property measured as the first pageview in a session, typically used with landingPagePath.",
        "group": "Page Tracking",
        "type": "METRIC",
        "uiName": "Entrances",
        "calculation": "none"
      },
      {
        "id": "ga:entranceRate",
        "dataType": "PERCENT",
        "description": "The percentage of pageviews in which this page was the entrance.",
        "group": "Page Tracking",
        "type": "METRIC",
        "uiName": "Entrances / Pageviews",
        "calculation": "ga:entrances / ga:pageviews"
      },
      {
        "id": "ga:pageviews",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The total number of pageviews for the property.",
        "group": "Page Tracking",
        "type": "METRIC",
        "uiName": "Pageviews",
        "calculation": "none"
      },
      {
        "id": "ga:pageviewsPerSession",
        "dataType": "FLOAT",
        "description": "The average number of pages viewed during a session, including repeated views of a single page.",
        "group": "Page Tracking",
        "type": "METRIC",
        "uiName": "Pages / Session",
        "calculation": "ga:pageviews / ga:sessions"
      },
      {
        "id": "ga:contentGroupUniqueViewsXX",
        "dataType": "INTEGER",
        "description": "The number of unique content group views. Content group views in different sessions are counted as unique content group views. Both the pagePath and pageTitle are used to determine content group view uniqueness.",
        "group": "Content Grouping",
        "type": "METRIC",
        "uiName": "Unique Views XX",
        "calculation": "none"
      },
      {
        "id": "ga:uniquePageviews",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Unique Pageviews is the number of sessions during which the specified page was viewed at least once. A unique pageview is counted for each page URL + page title combination.",
        "group": "Page Tracking",
        "type": "METRIC",
        "uiName": "Unique Pageviews",
        "calculation": "none"
      },
      {
        "id": "ga:timeOnPage",
        "allowedInSegments": "true",
        "dataType": "TIME",
        "description": "Time (in seconds) users spent on a particular page, calculated by subtracting the initial view time for a particular page from the initial view time for a subsequent page. This metric does not apply to exit pages of the property.",
        "group": "Page Tracking",
        "type": "METRIC",
        "uiName": "Time on Page",
        "calculation": "none"
      },
      {
        "id": "ga:avgTimeOnPage",
        "dataType": "TIME",
        "description": "The average time users spent viewing this page or a set of pages.",
        "group": "Page Tracking",
        "type": "METRIC",
        "uiName": "Avg. Time on Page",
        "calculation": "ga:timeOnPage / (ga:pageviews - ga:exits)"
      },
      {
        "id": "ga:exits",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of exits from the property.",
        "group": "Page Tracking",
        "type": "METRIC",
        "uiName": "Exits",
        "calculation": "none"
      },
      {
        "id": "ga:exitRate",
        "dataType": "PERCENT",
        "description": "The percentage of exits from the property that occurred out of the total pageviews.",
        "group": "Page Tracking",
        "type": "METRIC",
        "uiName": "% Exit",
        "calculation": "ga:exits / (ga:pageviews + ga:screenviews)"
      },
      {
        "id": "ga:searchUsed",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "A boolean, either Visits With Site Search or Visits Without Site Search, to distinguish whether internal search was used in a session.",
        "group": "Internal Search",
        "type": "DIMENSION",
        "uiName": "Site Search Status",
        "calculation": "none"
      },
      {
        "id": "ga:searchKeyword",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Search term used within the property.",
        "group": "Internal Search",
        "type": "DIMENSION",
        "uiName": "Search Term",
        "calculation": "none"
      },
      {
        "id": "ga:searchKeywordRefinement",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Subsequent keyword search term or string entered by users after a given initial string search.",
        "group": "Internal Search",
        "type": "DIMENSION",
        "uiName": "Refined Keyword",
        "calculation": "none"
      },
      {
        "id": "ga:searchCategory",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The category used for the internal search if site search categories are enabled in the view. For example, the product category may be electronics, furniture, or clothing.",
        "group": "Internal Search",
        "type": "DIMENSION",
        "uiName": "Site Search Category",
        "calculation": "none"
      },
      {
        "id": "ga:searchStartPage",
        "dataType": "STRING",
        "description": "The page where users initiated an internal search.",
        "group": "Internal Search",
        "type": "DIMENSION",
        "uiName": "Start Page",
        "calculation": "none"
      },
      {
        "id": "ga:searchDestinationPage",
        "dataType": "STRING",
        "description": "The page users immediately visited after performing an internal search on the site. This is usually the search results page.",
        "group": "Internal Search",
        "type": "DIMENSION",
        "uiName": "Destination Page",
        "calculation": "none"
      },
      {
        "id": "ga:searchAfterDestinationPage",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The page that users visited after performing an internal search on the site.",
        "group": "Internal Search",
        "type": "DIMENSION",
        "uiName": "Search Destination Page",
        "calculation": "none"
      },
      {
        "id": "ga:searchResultViews",
        "dataType": "INTEGER",
        "description": "The number of times a search result page was viewed.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "Results Pageviews",
        "calculation": "none"
      },
      {
        "id": "ga:searchUniques",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Total number of unique keywords from internal searches within a session. For example, if \"shoes\" was searched for 3 times in a session, it would be counted only once.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "Total Unique Searches",
        "calculation": "none"
      },
      {
        "id": "ga:avgSearchResultViews",
        "dataType": "FLOAT",
        "description": "The average number of times people viewed a page as a result of a search.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "Results Pageviews / Search",
        "calculation": "ga:searchResultViews / ga:searchUniques"
      },
      {
        "id": "ga:searchSessions",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The total number of sessions that included an internal search.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "Sessions with Search",
        "calculation": "none"
      },
      {
        "id": "ga:percentSessionsWithSearch",
        "dataType": "PERCENT",
        "description": "The percentage of sessions with search.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "% Sessions with Search",
        "calculation": "ga:searchSessions / ga:sessions"
      },
      {
        "id": "ga:searchDepth",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The total number of subsequent page views made after a use of the site's internal search feature.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "Search Depth",
        "calculation": "none"
      },
      {
        "id": "ga:avgSearchDepth",
        "dataType": "FLOAT",
        "description": "The average number of pages people viewed after performing a search.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "Average Search Depth",
        "calculation": "ga:searchDepth / ga:searchUniques"
      },
      {
        "id": "ga:searchRefinements",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The total number of times a refinement (transition) occurs between internal keywords search within a session. For example, if the sequence of keywords is \"shoes\", \"shoes\", \"pants\", \"pants\", this metric will be one because the transition between \"shoes\" and \"pants\" is different.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "Search Refinements",
        "calculation": "none"
      },
      {
        "id": "ga:percentSearchRefinements",
        "dataType": "PERCENT",
        "description": "The percentage of the number of times a refinement (i.e., transition) occurs between internal keywords search within a session.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "% Search Refinements",
        "calculation": "ga:searchRefinements / ga:searchResultViews"
      },
      {
        "id": "ga:searchDuration",
        "allowedInSegments": "true",
        "dataType": "TIME",
        "description": "The session duration when the site's internal search feature is used.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "Time after Search",
        "calculation": "none"
      },
      {
        "id": "ga:avgSearchDuration",
        "dataType": "TIME",
        "description": "The average time (in seconds) users, after searching, spent on the property.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "Time after Search",
        "calculation": "ga:searchDuration / ga:searchUniques"
      },
      {
        "id": "ga:searchExits",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of exits on the site that occurred following a search result from the site's internal search feature.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "Search Exits",
        "calculation": "none"
      },
      {
        "id": "ga:searchExitRate",
        "dataType": "PERCENT",
        "description": "The percentage of searches that resulted in an immediate exit from the property.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "% Search Exits",
        "calculation": "ga:searchExits / ga:searchUniques"
      },
      {
        "id": "ga:searchGoalXXConversionRate",
        "dataType": "PERCENT",
        "description": "The percentage of search sessions (i.e., sessions that included at least one search) which resulted in a conversion to the requested goal number.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "Site Search Goal XX Conversion Rate",
        "calculation": "ga:goalXXCompletions / ga:searchUniques"
      },
      {
        "id": "ga:searchGoalConversionRateAll",
        "dataType": "PERCENT",
        "description": "The percentage of search sessions (i.e., sessions that included at least one search) which resulted in a conversion to at least one of the goals.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "Site Search Goal Conversion Rate",
        "calculation": "ga:goalCompletionsAll / ga:searchUniques"
      },
      {
        "id": "ga:goalValueAllPerSearch",
        "dataType": "CURRENCY",
        "description": "The average goal value of a search.",
        "group": "Internal Search",
        "type": "METRIC",
        "uiName": "Per Search Goal Value",
        "calculation": "ga:goalValueAll / ga:searchUniques"
      },
      {
        "id": "ga:pageLoadTime",
        "dataType": "INTEGER",
        "description": "Total time (in milliseconds), from pageview initiation (e.g., a click on a page link) to page load completion in the browser, the pages in the sample set take to load.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Page Load Time (ms)",
        "calculation": "none"
      },
      {
        "id": "ga:pageLoadSample",
        "dataType": "INTEGER",
        "description": "The sample set (or count) of pageviews used to calculate the average page load time.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Page Load Sample",
        "calculation": "none"
      },
      {
        "id": "ga:avgPageLoadTime",
        "dataType": "FLOAT",
        "description": "The average time (in seconds) pages from the sample set take to load, from initiation of the pageview (e.g., a click on a page link) to load completion in the browser.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Avg. Page Load Time (sec)",
        "calculation": "(ga:pageLoadTime / ga:pageLoadSample / 1000)"
      },
      {
        "id": "ga:domainLookupTime",
        "dataType": "INTEGER",
        "description": "The total time (in milliseconds) all samples spent in DNS lookup for this page.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Domain Lookup Time (ms)",
        "calculation": "none"
      },
      {
        "id": "ga:avgDomainLookupTime",
        "dataType": "FLOAT",
        "description": "The average time (in seconds) spent in DNS lookup for this page.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Avg. Domain Lookup Time (sec)",
        "calculation": "(ga:domainLookupTime / ga:speedMetricsSample / 1000)"
      },
      {
        "id": "ga:pageDownloadTime",
        "dataType": "INTEGER",
        "description": "The total time (in milliseconds) to download this page among all samples.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Page Download Time (ms)",
        "calculation": "none"
      },
      {
        "id": "ga:avgPageDownloadTime",
        "dataType": "FLOAT",
        "description": "The average time (in seconds) to download this page.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Avg. Page Download Time (sec)",
        "calculation": "(ga:pageDownloadTime / ga:speedMetricsSample / 1000)"
      },
      {
        "id": "ga:redirectionTime",
        "dataType": "INTEGER",
        "description": "The total time (in milliseconds) all samples spent in redirects before fetching this page. If there are no redirects, this is 0.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Redirection Time (ms)",
        "calculation": "none"
      },
      {
        "id": "ga:avgRedirectionTime",
        "dataType": "FLOAT",
        "description": "The average time (in seconds) spent in redirects before fetching this page. If there are no redirects, this is 0.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Avg. Redirection Time (sec)",
        "calculation": "(ga:redirectionTime / ga:speedMetricsSample / 1000)"
      },
      {
        "id": "ga:serverConnectionTime",
        "dataType": "INTEGER",
        "description": "Total time (in milliseconds) all samples spent in establishing a TCP connection to this page.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Server Connection Time (ms)",
        "calculation": "none"
      },
      {
        "id": "ga:avgServerConnectionTime",
        "dataType": "FLOAT",
        "description": "The average time (in seconds) spent in establishing a TCP connection to this page.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Avg. Server Connection Time (sec)",
        "calculation": "(ga:serverConnectionTime / ga:speedMetricsSample / 1000)"
      },
      {
        "id": "ga:serverResponseTime",
        "dataType": "INTEGER",
        "description": "The total time (in milliseconds) the site's server takes to respond to users' requests among all samples; this includes the network time from users' locations to the server.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Server Response Time (ms)",
        "calculation": "none"
      },
      {
        "id": "ga:avgServerResponseTime",
        "dataType": "FLOAT",
        "description": "The average time (in seconds) the site's server takes to respond to users' requests; this includes the network time from users' locations to the server.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Avg. Server Response Time (sec)",
        "calculation": "(ga:serverResponseTime / ga:speedMetricsSample / 1000)"
      },
      {
        "id": "ga:speedMetricsSample",
        "dataType": "INTEGER",
        "description": "The sample set (or count) of pageviews used to calculate the averages of site speed metrics. This metric is used in all site speed average calculations, including avgDomainLookupTime, avgPageDownloadTime, avgRedirectionTime, avgServerConnectionTime, and avgServerResponseTime.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Speed Metrics Sample",
        "calculation": "none"
      },
      {
        "id": "ga:domInteractiveTime",
        "dataType": "INTEGER",
        "description": "The time (in milliseconds), including the network time from users' locations to the site's server, the browser takes to parse the document (DOMInteractive). At this time, users can interact with the Document Object Model even though it is not fully loaded.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Document Interactive Time (ms)",
        "calculation": "none"
      },
      {
        "id": "ga:avgDomInteractiveTime",
        "dataType": "FLOAT",
        "description": "The average time (in seconds), including the network time from users' locations to the site's server, the browser takes to parse the document and execute deferred and parser-inserted scripts.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Avg. Document Interactive Time (sec)",
        "calculation": "(ga:domInteractiveTime / ga:domLatencyMetricsSample / 1000)"
      },
      {
        "id": "ga:domContentLoadedTime",
        "dataType": "INTEGER",
        "description": "The time (in milliseconds), including the network time from users' locations to the site's server, the browser takes to parse the document and execute deferred and parser-inserted scripts (DOMContentLoaded). When parsing of the document is finished, the Document Object Model (DOM) is ready, but the referenced style sheets, images, and subframes may not be finished loading. This is often the starting point of Javascript framework execution, e.g., JQuery's onready() callback.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Document Content Loaded Time (ms)",
        "calculation": "none"
      },
      {
        "id": "ga:avgDomContentLoadedTime",
        "dataType": "FLOAT",
        "description": "The average time (in seconds) the browser takes to parse the document.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "Avg. Document Content Loaded Time (sec)",
        "calculation": "(ga:domContentLoadedTime / ga:domLatencyMetricsSample / 1000)"
      },
      {
        "id": "ga:domLatencyMetricsSample",
        "dataType": "INTEGER",
        "description": "Sample set (or count) of pageviews used to calculate the averages for site speed DOM metrics. This metric is used to calculate ga:avgDomContentLoadedTime and ga:avgDomInteractiveTime.",
        "group": "Site Speed",
        "type": "METRIC",
        "uiName": "DOM Latency Metrics Sample",
        "calculation": "none"
      },
      {
        "id": "ga:appInstallerId",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The ID of the app installer (e.g., Google Play Store) from which the app was downloaded. By default, the app installer ID is set by the PackageManager#getInstallerPackageName method.",
        "group": "App Tracking",
        "type": "DIMENSION",
        "uiName": "App Installer ID",
        "calculation": "none"
      },
      {
        "id": "ga:appVersion",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The application version.",
        "group": "App Tracking",
        "type": "DIMENSION",
        "uiName": "App Version",
        "calculation": "none"
      },
      {
        "id": "ga:appName",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The application name.",
        "group": "App Tracking",
        "type": "DIMENSION",
        "uiName": "App Name",
        "calculation": "none"
      },
      {
        "id": "ga:appId",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The application ID.",
        "group": "App Tracking",
        "type": "DIMENSION",
        "uiName": "App ID",
        "calculation": "none"
      },
      {
        "id": "ga:screenName",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The name of the screen.",
        "group": "App Tracking",
        "type": "DIMENSION",
        "uiName": "Screen Name",
        "calculation": "none"
      },
      {
        "id": "ga:screenDepth",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The number of screenviews (reported as a string) per session, useful for historgrams.",
        "group": "App Tracking",
        "type": "DIMENSION",
        "uiName": "Screen Depth",
        "calculation": "none"
      },
      {
        "id": "ga:landingScreenName",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The name of the first viewed screen.",
        "group": "App Tracking",
        "type": "DIMENSION",
        "uiName": "Landing Screen",
        "calculation": "none"
      },
      {
        "id": "ga:exitScreenName",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The name of the screen where users exited the application.",
        "group": "App Tracking",
        "type": "DIMENSION",
        "uiName": "Exit Screen",
        "calculation": "none"
      },
      {
        "id": "ga:screenviews",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The total number of screenviews.",
        "group": "App Tracking",
        "type": "METRIC",
        "uiName": "Screen Views",
        "calculation": "none"
      },
      {
        "id": "ga:uniqueScreenviews",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of unique screen views. Screen views in different sessions are counted as separate screen views.",
        "group": "App Tracking",
        "type": "METRIC",
        "uiName": "Unique Screen Views",
        "calculation": "none"
      },
      {
        "id": "ga:screenviewsPerSession",
        "dataType": "FLOAT",
        "description": "The average number of screenviews per session.",
        "group": "App Tracking",
        "type": "METRIC",
        "uiName": "Screens / Session",
        "calculation": "ga:screenviews / ga:sessions"
      },
      {
        "id": "ga:timeOnScreen",
        "allowedInSegments": "true",
        "dataType": "TIME",
        "description": "The time spent viewing the current screen.",
        "group": "App Tracking",
        "type": "METRIC",
        "uiName": "Time on Screen",
        "calculation": "none"
      },
      {
        "id": "ga:avgScreenviewDuration",
        "dataType": "TIME",
        "description": "Average time (in seconds) users spent on a screen.",
        "group": "App Tracking",
        "type": "METRIC",
        "uiName": "Avg. Time on Screen",
        "calculation": "none"
      },
      {
        "id": "ga:eventCategory",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The event category.",
        "group": "Event Tracking",
        "type": "DIMENSION",
        "uiName": "Event Category",
        "calculation": "none"
      },
      {
        "id": "ga:eventAction",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Event action.",
        "group": "Event Tracking",
        "type": "DIMENSION",
        "uiName": "Event Action",
        "calculation": "none"
      },
      {
        "id": "ga:eventLabel",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Event label.",
        "group": "Event Tracking",
        "type": "DIMENSION",
        "uiName": "Event Label",
        "calculation": "none"
      },
      {
        "id": "ga:totalEvents",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The total number of events for the profile, across all categories.",
        "group": "Event Tracking",
        "type": "METRIC",
        "uiName": "Total Events",
        "calculation": "none"
      },
      {
        "id": "ga:uniqueDimensionCombinations",
        "dataType": "INTEGER",
        "description": "Unique Dimension Combinations counts the number of unique dimension-value combinations for each dimension in a report. This lets you build combined (concatenated) dimensions post-processing, which allows for more flexible reporting without having to update your tracking implementation or use additional custom-dimension slots. For more information, see https://support.google.com/analytics/answer/7084499.",
        "group": "Session",
        "type": "METRIC",
        "uiName": "Unique Dimension Combinations",
        "calculation": "none"
      },
      {
        "id": "ga:eventValue",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Total value of events for the profile.",
        "group": "Event Tracking",
        "type": "METRIC",
        "uiName": "Event Value",
        "calculation": "none"
      },
      {
        "id": "ga:avgEventValue",
        "dataType": "FLOAT",
        "description": "The average value of an event.",
        "group": "Event Tracking",
        "type": "METRIC",
        "uiName": "Avg. Value",
        "calculation": "ga:eventValue / ga:totalEvents"
      },
      {
        "id": "ga:sessionsWithEvent",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The total number of sessions with events.",
        "group": "Event Tracking",
        "type": "METRIC",
        "uiName": "Sessions with Event",
        "calculation": "none"
      },
      {
        "id": "ga:eventsPerSessionWithEvent",
        "dataType": "FLOAT",
        "description": "The average number of events per session with event.",
        "group": "Event Tracking",
        "type": "METRIC",
        "uiName": "Events / Session with Event",
        "calculation": "ga:totalEvents / ga:sessionsWithEvent"
      },
      {
        "id": "ga:transactionId",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The transaction ID, supplied by the ecommerce tracking method, for the purchase in the shopping cart.",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Transaction ID",
        "calculation": "none"
      },
      {
        "id": "ga:affiliation",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "A product affiliation to designate a supplying company or brick and mortar location.",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Affiliation",
        "calculation": "none"
      },
      {
        "id": "ga:sessionsToTransaction",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The number of sessions between users' purchases and the related campaigns that lead to the purchases.",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Sessions to Transaction",
        "calculation": "none"
      },
      {
        "id": "ga:daysToTransaction",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The number of days between users' purchases and the most recent campaign source prior to the purchase.",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Days to Transaction",
        "calculation": "none"
      },
      {
        "id": "ga:productSku",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The product SKU, defined in the ecommerce tracking application, for purchased items.",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Product SKU",
        "calculation": "none"
      },
      {
        "id": "ga:productName",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The product name, supplied by the ecommerce tracking application, for purchased items.",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Product",
        "calculation": "none"
      },
      {
        "id": "ga:productCategory",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Any product variation (size, color) supplied by the ecommerce application for purchased items, not compatible with Enhanced Ecommerce.",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Product Category",
        "calculation": "none"
      },
      {
        "id": "ga:currencyCode",
        "dataType": "STRING",
        "description": "The local currency code (based on ISO 4217 standard) of the transaction.",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Currency Code",
        "calculation": "none"
      },
      {
        "id": "ga:transactions",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The total number of transactions.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Transactions",
        "calculation": "none"
      },
      {
        "id": "ga:transactionsPerSession",
        "dataType": "PERCENT",
        "description": "The average number of transactions in a session.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Ecommerce Conversion Rate",
        "calculation": "ga:transactions / ga:sessions"
      },
      {
        "id": "ga:transactionRevenue",
        "allowedInSegments": "true",
        "dataType": "CURRENCY",
        "description": "The total sale revenue (excluding shipping and tax) of the transaction.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Revenue",
        "calculation": "none"
      },
      {
        "id": "ga:revenuePerTransaction",
        "dataType": "CURRENCY",
        "description": "The average revenue of an ecommerce transaction.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Average Order Value",
        "calculation": "ga:transactionRevenue / ga:transactions"
      },
      {
        "id": "ga:transactionRevenuePerSession",
        "dataType": "CURRENCY",
        "description": "Average transaction revenue for a session.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Per Session Value",
        "calculation": "ga:transactionRevenue / ga:sessions"
      },
      {
        "id": "ga:transactionShipping",
        "allowedInSegments": "true",
        "dataType": "CURRENCY",
        "description": "The total cost of shipping.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Shipping",
        "calculation": "none"
      },
      {
        "id": "ga:transactionTax",
        "allowedInSegments": "true",
        "dataType": "CURRENCY",
        "description": "Total tax for the transaction.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Tax",
        "calculation": "none"
      },
      {
        "id": "ga:totalValue",
        "dataType": "CURRENCY",
        "description": "Total value for the property (including total revenue and total goal value).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Total Value",
        "calculation": "(ga:transactionRevenue + ga:goalValueAll)"
      },
      {
        "id": "ga:itemQuantity",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Total number of items purchased. For example, if users purchase 2 frisbees and 5 tennis balls, this will be 7.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Quantity",
        "calculation": "none"
      },
      {
        "id": "ga:uniquePurchases",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of product sets purchased. For example, if users purchase 2 frisbees and 5 tennis balls from the site, this will be 2.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Unique Purchases",
        "calculation": "none"
      },
      {
        "id": "ga:revenuePerItem",
        "dataType": "CURRENCY",
        "description": "The average revenue per item.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Average Price",
        "calculation": "ga:itemRevenue / ga:itemQuantity"
      },
      {
        "id": "ga:itemRevenue",
        "allowedInSegments": "true",
        "dataType": "CURRENCY",
        "description": "The total revenue from purchased product items.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Product Revenue",
        "calculation": "none"
      },
      {
        "id": "ga:itemsPerPurchase",
        "dataType": "FLOAT",
        "description": "The average quantity of this item (or group of items) sold per purchase.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Average QTY",
        "calculation": "ga:itemQuantity / ga:uniquePurchases"
      },
      {
        "id": "ga:localTransactionRevenue",
        "dataType": "CURRENCY",
        "description": "Transaction revenue in local currency.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Local Revenue",
        "calculation": "none"
      },
      {
        "id": "ga:localTransactionShipping",
        "dataType": "CURRENCY",
        "description": "Transaction shipping cost in local currency.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Local Shipping",
        "calculation": "none"
      },
      {
        "id": "ga:localTransactionTax",
        "dataType": "CURRENCY",
        "description": "Transaction tax in local currency.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Local Tax",
        "calculation": "none"
      },
      {
        "id": "ga:localItemRevenue",
        "allowedInSegments": "true",
        "dataType": "CURRENCY",
        "description": "Product revenue in local currency.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Local Product Revenue",
        "calculation": "none"
      },
      {
        "id": "ga:socialInteractionNetwork",
        "dataType": "STRING",
        "description": "For social interactions, this represents the social network being tracked.",
        "group": "Social Interactions",
        "type": "DIMENSION",
        "uiName": "Social Network",
        "calculation": "none"
      },
      {
        "id": "ga:socialInteractionAction",
        "dataType": "STRING",
        "description": "For social interactions, this is the social action (e.g., +1, bookmark) being tracked.",
        "group": "Social Interactions",
        "type": "DIMENSION",
        "uiName": "Social Action",
        "calculation": "none"
      },
      {
        "id": "ga:socialInteractionNetworkAction",
        "dataType": "STRING",
        "description": "For social interactions, this is the concatenation of the socialInteractionNetwork and socialInteractionAction action (e.g., Google: +1) being tracked at this hit level.",
        "group": "Social Interactions",
        "type": "DIMENSION",
        "uiName": "Social Network and Action",
        "calculation": "none"
      },
      {
        "id": "ga:socialInteractionTarget",
        "dataType": "STRING",
        "description": "For social interactions, this is the URL (or resource) which receives the social network action.",
        "group": "Social Interactions",
        "type": "DIMENSION",
        "uiName": "Social Entity",
        "calculation": "none"
      },
      {
        "id": "ga:socialEngagementType",
        "dataType": "STRING",
        "description": "Engagement type, either \"Socially Engaged\" or \"Not Socially Engaged\".",
        "group": "Social Interactions",
        "type": "DIMENSION",
        "uiName": "Social Type",
        "calculation": "none"
      },
      {
        "id": "ga:socialInteractions",
        "dataType": "INTEGER",
        "description": "The total number of social interactions.",
        "group": "Social Interactions",
        "type": "METRIC",
        "uiName": "Social Actions",
        "calculation": "none"
      },
      {
        "id": "ga:uniqueSocialInteractions",
        "dataType": "INTEGER",
        "description": "The number of sessions during which the specified social action(s) occurred at least once. This is based on the the unique combination of socialInteractionNetwork, socialInteractionAction, and socialInteractionTarget.",
        "group": "Social Interactions",
        "type": "METRIC",
        "uiName": "Unique Social Actions",
        "calculation": "none"
      },
      {
        "id": "ga:socialInteractionsPerSession",
        "dataType": "FLOAT",
        "description": "The number of social interactions per session.",
        "group": "Social Interactions",
        "type": "METRIC",
        "uiName": "Actions Per Social Session",
        "calculation": "ga:socialInteractions / ga:uniqueSocialInteractions"
      },
      {
        "id": "ga:userTimingCategory",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "For easier reporting purposes, this is used to categorize all user timing variables into logical groups.",
        "group": "User Timings",
        "type": "DIMENSION",
        "uiName": "Timing Category",
        "calculation": "none"
      },
      {
        "id": "ga:userTimingLabel",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The name of the resource's action being tracked.",
        "group": "User Timings",
        "type": "DIMENSION",
        "uiName": "Timing Label",
        "calculation": "none"
      },
      {
        "id": "ga:userTimingVariable",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Used to add flexibility to visualize user timings in the reports.",
        "group": "User Timings",
        "type": "DIMENSION",
        "uiName": "Timing Variable",
        "calculation": "none"
      },
      {
        "id": "ga:userTimingValue",
        "dataType": "INTEGER",
        "description": "Total number of milliseconds for user timing.",
        "group": "User Timings",
        "type": "METRIC",
        "uiName": "User Timing (ms)",
        "calculation": "none"
      },
      {
        "id": "ga:userTimingSample",
        "dataType": "INTEGER",
        "description": "The number of hits sent for a particular userTimingCategory, userTimingLabel, or userTimingVariable.",
        "group": "User Timings",
        "type": "METRIC",
        "uiName": "User Timing Sample",
        "calculation": "none"
      },
      {
        "id": "ga:avgUserTimingValue",
        "dataType": "FLOAT",
        "description": "The average elapsed time.",
        "group": "User Timings",
        "type": "METRIC",
        "uiName": "Avg. User Timing (sec)",
        "calculation": "(ga:userTimingValue / ga:userTimingSample / 1000)"
      },
      {
        "id": "ga:exceptionDescription",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The description for the exception.",
        "group": "Exceptions",
        "type": "DIMENSION",
        "uiName": "Exception Description",
        "calculation": "none"
      },
      {
        "id": "ga:exceptions",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of exceptions sent to Google Analytics.",
        "group": "Exceptions",
        "type": "METRIC",
        "uiName": "Exceptions",
        "calculation": "none"
      },
      {
        "id": "ga:exceptionsPerScreenview",
        "dataType": "PERCENT",
        "description": "The number of exceptions thrown divided by the number of screenviews.",
        "group": "Exceptions",
        "type": "METRIC",
        "uiName": "Exceptions / Screen",
        "calculation": "ga:exceptions / ga:screenviews"
      },
      {
        "id": "ga:fatalExceptions",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of exceptions where isFatal is set to true.",
        "group": "Exceptions",
        "type": "METRIC",
        "uiName": "Crashes",
        "calculation": "none"
      },
      {
        "id": "ga:fatalExceptionsPerScreenview",
        "dataType": "PERCENT",
        "description": "The number of fatal exceptions thrown divided by the number of screenviews.",
        "group": "Exceptions",
        "type": "METRIC",
        "uiName": "Crashes / Screen",
        "calculation": "ga:fatalExceptions / ga:screenviews"
      },
      {
        "id": "ga:experimentId",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The user-scoped ID of the content experiment that users were exposed to when the metrics were reported.",
        "group": "Content Experiments",
        "type": "DIMENSION",
        "uiName": "Experiment ID",
        "calculation": "none"
      },
      {
        "id": "ga:experimentVariant",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The user-scoped ID of the particular variant that users were exposed to during a content experiment.",
        "group": "Content Experiments",
        "type": "DIMENSION",
        "uiName": "Variant",
        "calculation": "none"
      },
      {
        "id": "ga:dimensionXX",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The value of the requested custom dimension, where XX refers to the number or index of the custom dimension.",
        "group": "Custom Variables or Columns",
        "type": "DIMENSION",
        "uiName": "Custom Dimension XX",
        "calculation": "none"
      },
      {
        "id": "ga:customVarNameXX",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The name for the requested custom variable.",
        "group": "Custom Variables or Columns",
        "type": "DIMENSION",
        "uiName": "Custom Variable (Key XX)",
        "calculation": "none"
      },
      {
        "id": "ga:metricXX",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The value of the requested custom metric, where XX refers to the number or index of the custom metric. Note that the data type of ga:metricXX can be INTEGER, CURRENCY, or TIME.",
        "group": "Custom Variables or Columns",
        "type": "METRIC",
        "uiName": "Custom Metric XX Value",
        "calculation": "none"
      },
      {
        "id": "ga:customVarValueXX",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The value for the requested custom variable.",
        "group": "Custom Variables or Columns",
        "type": "DIMENSION",
        "uiName": "Custom Variable (Value XX)",
        "calculation": "none"
      },
      {
        "id": "ga:date",
        "dataType": "STRING",
        "description": "The date of the session formatted as YYYYMMDD.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Date",
        "calculation": "none"
      },
      {
        "id": "ga:year",
        "dataType": "STRING",
        "description": "The year of the session, a four-digit year from 2005 to the current year.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Year",
        "calculation": "none"
      },
      {
        "id": "ga:month",
        "dataType": "STRING",
        "description": "Month of the session, a two digit integer from 01 to 12.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Month of the year",
        "calculation": "none"
      },
      {
        "id": "ga:week",
        "dataType": "STRING",
        "description": "The week of the session, a two-digit number from 01 to 53. Each week starts on Sunday.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Week of the Year",
        "calculation": "none"
      },
      {
        "id": "ga:day",
        "dataType": "STRING",
        "description": "The day of the month, a two-digit number from 01 to 31.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Day of the month",
        "calculation": "none"
      },
      {
        "id": "ga:hour",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "A two-digit hour of the day ranging from 00-23 in the timezone configured for the account. This value is also corrected for daylight savings time. If the timezone follows daylight savings time, there will be an apparent bump in the number of sessions during the changeover hour (e.g., between 1:00 and 2:00) for the day per year when that hour repeats. A corresponding hour with zero sessions will occur at the opposite changeover. (Google Analytics does not track user time more precisely than hours.)",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Hour",
        "calculation": "none"
      },
      {
        "id": "ga:minute",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Returns the minutes, between 00 and 59, in the hour.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Minute",
        "calculation": "none"
      },
      {
        "id": "ga:nthMonth",
        "dataType": "STRING",
        "description": "The index for a month in the specified date range. In the date range, the index for the first month is 0, for the second month 1, and so on.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Month Index",
        "calculation": "none"
      },
      {
        "id": "ga:nthWeek",
        "dataType": "STRING",
        "description": "The index for each week in the specified date range. The index for the first week in the date range is 0, for the second week 1, and so on. The index corresponds to week entries.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Week Index",
        "calculation": "none"
      },
      {
        "id": "ga:nthDay",
        "dataType": "STRING",
        "description": "The index for each day in the specified date range. The index for the first day (i.e., start-date) in the date range is 0, for the second day 1, and so on.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Day Index",
        "calculation": "none"
      },
      {
        "id": "ga:nthMinute",
        "dataType": "STRING",
        "description": "The index for each minute in the specified date range. The index for the first minute of the first day (i.e., start-date) in the date range is 0, for the next minute 1, and so on.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Minute Index",
        "calculation": "none"
      },
      {
        "id": "ga:dayOfWeek",
        "dataType": "STRING",
        "description": "Day of the week, a one-digit number from 0 (Sunday) to 6 (Saturday).",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Day of Week",
        "calculation": "none"
      },
      {
        "id": "ga:dayOfWeekName",
        "dataType": "STRING",
        "description": "Name (in English) of the day of the week.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Day of Week Name",
        "calculation": "none"
      },
      {
        "id": "ga:dateHour",
        "dataType": "STRING",
        "description": "Combined values of ga:date and ga:hour.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Hour of Day",
        "calculation": "none"
      },
      {
        "id": "ga:yearMonth",
        "dataType": "STRING",
        "description": "Combined values of ga:year and ga:month.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Month of Year",
        "calculation": "none"
      },
      {
        "id": "ga:yearWeek",
        "dataType": "STRING",
        "description": "Combined values of ga:year and ga:week.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Week of Year",
        "calculation": "none"
      },
      {
        "id": "ga:isoWeek",
        "dataType": "STRING",
        "description": "ISO week number, where each week starts on Monday. For details, see http://en.wikipedia.org/wiki/ISO_week_date. ga:isoWeek should only be used with ga:isoYear because ga:year represents Gregorian calendar.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "ISO Week of the Year",
        "calculation": "none"
      },
      {
        "id": "ga:isoYear",
        "dataType": "STRING",
        "description": "The ISO year of the session. For details, see http://en.wikipedia.org/wiki/ISO_week_date. ga:isoYear should only be used with ga:isoWeek because ga:week represents Gregorian calendar.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "ISO Year",
        "calculation": "none"
      },
      {
        "id": "ga:isoYearIsoWeek",
        "dataType": "STRING",
        "description": "Combined values of ga:isoYear and ga:isoWeek.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "ISO Week of ISO Year",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickAd",
        "dataType": "STRING",
        "description": "DCM ad name of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Ad (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickAdId",
        "dataType": "STRING",
        "description": "DCM ad ID of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Ad ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickAdType",
        "dataType": "STRING",
        "description": "DCM ad type name of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Ad Type (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickAdTypeId",
        "dataType": "STRING",
        "description": "DCM ad type ID of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Ad Type ID",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickAdvertiser",
        "dataType": "STRING",
        "description": "DCM advertiser name of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Advertiser (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickAdvertiserId",
        "dataType": "STRING",
        "description": "DCM advertiser ID of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Advertiser ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickCampaign",
        "dataType": "STRING",
        "description": "DCM campaign name of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Campaign (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickCampaignId",
        "dataType": "STRING",
        "description": "DCM campaign ID of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Campaign ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickCreativeId",
        "dataType": "STRING",
        "description": "DCM creative ID of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Creative ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickCreative",
        "dataType": "STRING",
        "description": "DCM creative name of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Creative (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickRenderingId",
        "dataType": "STRING",
        "description": "DCM rendering ID of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Rendering ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickCreativeType",
        "dataType": "STRING",
        "description": "DCM creative type name of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Creative Type (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickCreativeTypeId",
        "dataType": "STRING",
        "description": "DCM creative type ID of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Creative Type ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickCreativeVersion",
        "dataType": "STRING",
        "description": "DCM creative version of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Creative Version (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickSite",
        "dataType": "STRING",
        "description": "Site name where the DCM creative was shown and clicked on for the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Site (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickSiteId",
        "dataType": "STRING",
        "description": "DCM site ID where the DCM creative was shown and clicked on for the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Site ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickSitePlacement",
        "dataType": "STRING",
        "description": "DCM site placement name of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Placement (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickSitePlacementId",
        "dataType": "STRING",
        "description": "DCM site placement ID of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Placement ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClickSpotId",
        "dataType": "STRING",
        "description": "DCM Floodlight configuration ID of the DCM click matching the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Floodlight Configuration ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmFloodlightActivity",
        "dataType": "STRING",
        "description": "DCM Floodlight activity name associated with the floodlight conversion (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Activity",
        "calculation": "none"
      },
      {
        "id": "ga:dcmFloodlightActivityAndGroup",
        "dataType": "STRING",
        "description": "DCM Floodlight activity name and group name associated with the floodlight conversion (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Activity and Group",
        "calculation": "none"
      },
      {
        "id": "ga:dcmFloodlightActivityGroup",
        "dataType": "STRING",
        "description": "DCM Floodlight activity group name associated with the floodlight conversion (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Activity Group",
        "calculation": "none"
      },
      {
        "id": "ga:dcmFloodlightActivityGroupId",
        "dataType": "STRING",
        "description": "DCM Floodlight activity group ID associated with the floodlight conversion (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Activity Group ID",
        "calculation": "none"
      },
      {
        "id": "ga:dcmFloodlightActivityId",
        "dataType": "STRING",
        "description": "DCM Floodlight activity ID associated with the floodlight conversion (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Activity ID",
        "calculation": "none"
      },
      {
        "id": "ga:dcmFloodlightAdvertiserId",
        "dataType": "STRING",
        "description": "DCM Floodlight advertiser ID associated with the floodlight conversion (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Advertiser ID",
        "calculation": "none"
      },
      {
        "id": "ga:dcmFloodlightSpotId",
        "dataType": "STRING",
        "description": "DCM Floodlight configuration ID associated with the floodlight conversion (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Floodlight Configuration ID",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventAd",
        "dataType": "STRING",
        "description": "DCM ad name of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Ad",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventAdId",
        "dataType": "STRING",
        "description": "DCM ad ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Ad ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventAdType",
        "dataType": "STRING",
        "description": "DCM ad type name of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Ad Type (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventAdTypeId",
        "dataType": "STRING",
        "description": "DCM ad type ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Ad Type ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventAdvertiser",
        "dataType": "STRING",
        "description": "DCM advertiser name of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Advertiser (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventAdvertiserId",
        "dataType": "STRING",
        "description": "DCM advertiser ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Advertiser ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventAttributionType",
        "dataType": "STRING",
        "description": "There are two possible values: ClickThrough and ViewThrough. If the last DCM event associated with the Google Analytics session was a click, then the value will be ClickThrough. If the last DCM event associated with the Google Analytics session was an ad impression, then the value will be ViewThrough (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Attribution Type (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventCampaign",
        "dataType": "STRING",
        "description": "DCM campaign name of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Campaign (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventCampaignId",
        "dataType": "STRING",
        "description": "DCM campaign ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Campaign ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventCreativeId",
        "dataType": "STRING",
        "description": "DCM creative ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Creative ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventCreative",
        "dataType": "STRING",
        "description": "DCM creative name of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Creative (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventRenderingId",
        "dataType": "STRING",
        "description": "DCM rendering ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Rendering ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventCreativeType",
        "dataType": "STRING",
        "description": "DCM creative type name of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Creative Type (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventCreativeTypeId",
        "dataType": "STRING",
        "description": "DCM creative type ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Creative Type ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventCreativeVersion",
        "dataType": "STRING",
        "description": "DCM creative version of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Creative Version (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventSite",
        "dataType": "STRING",
        "description": "Site name where the DCM creative was shown and clicked on for the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Site (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventSiteId",
        "dataType": "STRING",
        "description": "DCM site ID where the DCM creative was shown and clicked on for the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Site ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventSitePlacement",
        "dataType": "STRING",
        "description": "DCM site placement name of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Placement (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventSitePlacementId",
        "dataType": "STRING",
        "description": "DCM site placement ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Placement ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmLastEventSpotId",
        "dataType": "STRING",
        "description": "DCM Floodlight configuration ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "DIMENSION",
        "uiName": "DFA Floodlight Configuration ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dcmFloodlightQuantity",
        "dataType": "INTEGER",
        "description": "The number of DCM Floodlight conversions (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "METRIC",
        "uiName": "DFA Conversions",
        "calculation": "none"
      },
      {
        "id": "ga:dcmFloodlightRevenue",
        "dataType": "CURRENCY",
        "description": "DCM Floodlight revenue (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "METRIC",
        "uiName": "DFA Revenue",
        "calculation": "none"
      },
      {
        "id": "ga:landingContentGroupXX",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Content group of users' landing pages.",
        "group": "Content Grouping",
        "type": "DIMENSION",
        "uiName": "Landing Page Group XX",
        "calculation": "none"
      },
      {
        "id": "ga:previousContentGroupXX",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Refers to content group that was visited before another content group.",
        "group": "Content Grouping",
        "type": "DIMENSION",
        "uiName": "Previous Page Group XX",
        "calculation": "none"
      },
      {
        "id": "ga:contentGroupXX",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The content group on a property. A content group is a collection of content providing a logical structure that can be determined by tracking code or page title/URL regex match, or predefined rules.",
        "group": "Content Grouping",
        "type": "DIMENSION",
        "uiName": "Page Group XX",
        "calculation": "none"
      },
      {
        "id": "ga:userAgeBracket",
        "dataType": "STRING",
        "description": "Age bracket of users.",
        "group": "Audience",
        "type": "DIMENSION",
        "uiName": "Age",
        "calculation": "none"
      },
      {
        "id": "ga:userGender",
        "dataType": "STRING",
        "description": "Gender of users.",
        "group": "Audience",
        "type": "DIMENSION",
        "uiName": "Gender",
        "calculation": "none"
      },
      {
        "id": "ga:interestOtherCategory",
        "dataType": "STRING",
        "description": "Indicates that users are more likely to be interested in learning about the specified category, and more likely to be ready to purchase.",
        "group": "Audience",
        "type": "DIMENSION",
        "uiName": "Other Category",
        "calculation": "none"
      },
      {
        "id": "ga:interestAffinityCategory",
        "dataType": "STRING",
        "description": "Indicates that users are more likely to be interested in learning about the specified category.",
        "group": "Audience",
        "type": "DIMENSION",
        "uiName": "Affinity Category (reach)",
        "calculation": "none"
      },
      {
        "id": "ga:interestInMarketCategory",
        "dataType": "STRING",
        "description": "Indicates that users are more likely to be ready to purchase products or services in the specified category.",
        "group": "Audience",
        "type": "DIMENSION",
        "uiName": "In-Market Segment",
        "calculation": "none"
      },
      {
        "id": "ga:adsenseRevenue",
        "allowedInSegments": "true",
        "dataType": "CURRENCY",
        "description": "The total revenue from AdSense ads.",
        "group": "Adsense",
        "type": "METRIC",
        "uiName": "AdSense Revenue",
        "calculation": "none"
      },
      {
        "id": "ga:adsenseAdUnitsViewed",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of AdSense ad units viewed. An ad unit is a set of ads displayed as a result of one piece of the AdSense ad code. For details, see https://support.google.com/adsense/answer/32715?hl=en.",
        "group": "Adsense",
        "type": "METRIC",
        "uiName": "AdSense Ad Units Viewed",
        "calculation": "none"
      },
      {
        "id": "ga:adsenseAdsViewed",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of AdSense ads viewed. Multiple ads can be displayed within an ad Unit.",
        "group": "Adsense",
        "type": "METRIC",
        "uiName": "AdSense Impressions",
        "calculation": "none"
      },
      {
        "id": "ga:adsenseAdsClicks",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of times AdSense ads on the site were clicked.",
        "group": "Adsense",
        "type": "METRIC",
        "uiName": "AdSense Ads Clicked",
        "calculation": "none"
      },
      {
        "id": "ga:adsensePageImpressions",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of pageviews during which an AdSense ad was displayed. A page impression can have multiple ad Units.",
        "group": "Adsense",
        "type": "METRIC",
        "uiName": "AdSense Page Impressions",
        "calculation": "none"
      },
      {
        "id": "ga:adsenseCTR",
        "dataType": "PERCENT",
        "description": "The percentage of page impressions resulted in a click on an AdSense ad.",
        "group": "Adsense",
        "type": "METRIC",
        "uiName": "AdSense CTR",
        "calculation": "ga:adsenseAdsClicks/ga:adsensePageImpressions"
      },
      {
        "id": "ga:adsenseECPM",
        "dataType": "CURRENCY",
        "description": "The estimated cost per thousand page impressions. It is the AdSense Revenue per 1,000 page impressions.",
        "group": "Adsense",
        "type": "METRIC",
        "uiName": "AdSense eCPM",
        "calculation": "ga:adsenseRevenue/(ga:adsensePageImpressions/1000)"
      },
      {
        "id": "ga:adsenseExits",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of sessions ended due to a user clicking on an AdSense ad.",
        "group": "Adsense",
        "type": "METRIC",
        "uiName": "AdSense Exits",
        "calculation": "none"
      },
      {
        "id": "ga:adsenseViewableImpressionPercent",
        "dataType": "PERCENT",
        "description": "The percentage of viewable impressions.",
        "group": "Adsense",
        "type": "METRIC",
        "uiName": "AdSense Viewable Impression %",
        "calculation": "none"
      },
      {
        "id": "ga:adsenseCoverage",
        "dataType": "PERCENT",
        "description": "The percentage of ad requests that returned at least one ad.",
        "group": "Adsense",
        "type": "METRIC",
        "uiName": "AdSense Coverage",
        "calculation": "none"
      },
      {
        "id": "ga:adxImpressions",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "An Ad Exchange ad impression is reported whenever an individual ad is displayed on the website. For example, if a page with two ad units is viewed once, we'll display two impressions.",
        "group": "Ad Exchange",
        "type": "METRIC",
        "uiName": "AdX Impressions",
        "calculation": "none"
      },
      {
        "id": "ga:adxCoverage",
        "dataType": "PERCENT",
        "description": "Coverage is the percentage of ad requests that returned at least one ad. Generally, coverage can help identify sites where the Ad Exchange account isn't able to provide targeted ads. (Ad Impressions / Total Ad Requests) * 100",
        "group": "Ad Exchange",
        "type": "METRIC",
        "uiName": "AdX Coverage",
        "calculation": "none"
      },
      {
        "id": "ga:adxMonetizedPageviews",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "This measures the total number of pageviews on the property that were shown with an ad from the linked Ad Exchange account. Note that a single page can have multiple ad units.",
        "group": "Ad Exchange",
        "type": "METRIC",
        "uiName": "AdX Monetized Pageviews",
        "calculation": "none"
      },
      {
        "id": "ga:adxImpressionsPerSession",
        "dataType": "FLOAT",
        "description": "The ratio of Ad Exchange ad impressions to Analytics sessions (Ad Impressions / Analytics Sessions).",
        "group": "Ad Exchange",
        "type": "METRIC",
        "uiName": "AdX Impressions / Session",
        "calculation": "none"
      },
      {
        "id": "ga:adxViewableImpressionsPercent",
        "dataType": "PERCENT",
        "description": "The percentage of viewable ad impressions. An impression is considered a viewable impression when it has appeared within users' browsers and has the opportunity to be seen.",
        "group": "Ad Exchange",
        "type": "METRIC",
        "uiName": "AdX Viewable Impressions %",
        "calculation": "none"
      },
      {
        "id": "ga:adxClicks",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of times AdX ads were clicked on the site.",
        "group": "Ad Exchange",
        "type": "METRIC",
        "uiName": "AdX Clicks",
        "calculation": "none"
      },
      {
        "id": "ga:adxCTR",
        "dataType": "PERCENT",
        "description": "The percentage of pageviews that resulted in a click on an Ad Exchange ad.",
        "group": "Ad Exchange",
        "type": "METRIC",
        "uiName": "AdX CTR",
        "calculation": "none"
      },
      {
        "id": "ga:adxRevenue",
        "allowedInSegments": "true",
        "dataType": "CURRENCY",
        "description": "The total estimated revenue from Ad Exchange ads.",
        "group": "Ad Exchange",
        "type": "METRIC",
        "uiName": "AdX Revenue",
        "calculation": "none"
      },
      {
        "id": "ga:adxRevenuePer1000Sessions",
        "dataType": "CURRENCY",
        "description": "The total estimated revenue from Ad Exchange ads per 1,000 Analytics sessions. Note that this metric is based on sessions to the site, not on ad impressions.",
        "group": "Ad Exchange",
        "type": "METRIC",
        "uiName": "AdX Revenue / 1000 Sessions",
        "calculation": "none"
      },
      {
        "id": "ga:adxECPM",
        "dataType": "CURRENCY",
        "description": "The effective cost per thousand pageviews. It is the Ad Exchange revenue per 1,000 pageviews.",
        "group": "Ad Exchange",
        "type": "METRIC",
        "uiName": "AdX eCPM",
        "calculation": "none"
      },
      {
        "id": "ga:dfpImpressions",
        "dataType": "INTEGER",
        "description": "A DFP ad impression is reported whenever an individual ad is displayed on the website. For example, if a page with two ad units is viewed once, we'll display two impressions (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers",
        "type": "METRIC",
        "uiName": "DFP Impressions",
        "calculation": "none"
      },
      {
        "id": "ga:dfpCoverage",
        "dataType": "PERCENT",
        "description": "Coverage is the percentage of ad requests that returned at least one ad. Generally, coverage can help identify sites where the DFP account isn't able to provide targeted ads. (Ad Impressions / Total Ad Requests) * 100 (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers",
        "type": "METRIC",
        "uiName": "DFP Coverage",
        "calculation": "none"
      },
      {
        "id": "ga:dfpMonetizedPageviews",
        "dataType": "INTEGER",
        "description": "This measures the total number of pageviews on the property that were shown with an ad from the linked DFP account. Note that a single page can have multiple ad units (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers",
        "type": "METRIC",
        "uiName": "DFP Monetized Pageviews",
        "calculation": "none"
      },
      {
        "id": "ga:dfpImpressionsPerSession",
        "dataType": "FLOAT",
        "description": "The ratio of DFP ad impressions to Analytics sessions (Ad Impressions / Analytics Sessions) (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers",
        "type": "METRIC",
        "uiName": "DFP Impressions / Session",
        "calculation": "none"
      },
      {
        "id": "ga:dfpViewableImpressionsPercent",
        "dataType": "PERCENT",
        "description": "The percentage of viewable ad impressions. An impression is considered a viewable impression when it has appeared within users' browsers and has the opportunity to be seen (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers",
        "type": "METRIC",
        "uiName": "DFP Viewable Impressions %",
        "calculation": "none"
      },
      {
        "id": "ga:dfpClicks",
        "dataType": "INTEGER",
        "description": "The number of times DFP ads were clicked on the site (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers",
        "type": "METRIC",
        "uiName": "DFP Clicks",
        "calculation": "none"
      },
      {
        "id": "ga:dfpCTR",
        "dataType": "PERCENT",
        "description": "The percentage of pageviews that resulted in a click on an DFP ad (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers",
        "type": "METRIC",
        "uiName": "DFP CTR",
        "calculation": "none"
      },
      {
        "id": "ga:dfpRevenue",
        "dataType": "CURRENCY",
        "description": "DFP revenue is an estimate of the total ad revenue based on served impressions (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers",
        "type": "METRIC",
        "uiName": "DFP Revenue",
        "calculation": "none"
      },
      {
        "id": "ga:dfpRevenuePer1000Sessions",
        "dataType": "CURRENCY",
        "description": "The total estimated revenue from DFP ads per 1,000 Analytics sessions. Note that this metric is based on sessions to the site, not on ad impressions (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers",
        "type": "METRIC",
        "uiName": "DFP Revenue / 1000 Sessions",
        "calculation": "none"
      },
      {
        "id": "ga:dfpECPM",
        "dataType": "CURRENCY",
        "description": "The effective cost per thousand pageviews. It is the DFP revenue per 1,000 pageviews (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers",
        "type": "METRIC",
        "uiName": "DFP eCPM",
        "calculation": "none"
      },
      {
        "id": "ga:backfillImpressions",
        "dataType": "INTEGER",
        "description": "Backfill Impressions is the sum of all AdSense or Ad Exchance ad impressions served as backfill through DFP. An ad impression is reported whenever an individual ad is displayed on the website. For example, if a page with two ad units is viewed once, we'll display two impressions (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers Backfill",
        "type": "METRIC",
        "uiName": "DFP Backfill Impressions",
        "calculation": "none"
      },
      {
        "id": "ga:backfillCoverage",
        "dataType": "PERCENT",
        "description": "Backfill Coverage is the percentage of backfill ad requests that returned at least one ad. Generally, coverage can help identify sites where the publisher account isn't able to provide targeted ads. (Ad Impressions / Total Ad Requests) * 100. If both AdSense and Ad Exchange are providing backfill ads, this metric is the weighted average of the two backfill accounts (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers Backfill",
        "type": "METRIC",
        "uiName": "DFP Backfill Coverage",
        "calculation": "none"
      },
      {
        "id": "ga:backfillMonetizedPageviews",
        "dataType": "INTEGER",
        "description": "This measures the total number of pageviews on the property that were shown with at least one ad from the linked backfill account(s). Note that a single monetized pageview can include multiple ad impressions (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers Backfill",
        "type": "METRIC",
        "uiName": "DFP Backfill Monetized Pageviews",
        "calculation": "none"
      },
      {
        "id": "ga:backfillImpressionsPerSession",
        "dataType": "FLOAT",
        "description": "The ratio of backfill ad impressions to Analytics sessions (Ad Impressions / Analytics Sessions). If both AdSense and Ad Exchange are providing backfill ads, this metric is the sum of the two backfill accounts (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers Backfill",
        "type": "METRIC",
        "uiName": "DFP Backfill Impressions / Session",
        "calculation": "none"
      },
      {
        "id": "ga:backfillViewableImpressionsPercent",
        "dataType": "PERCENT",
        "description": "The percentage of backfill ad impressions that were viewable. An impression is considered a viewable impression when it has appeared within the users' browsers and had the opportunity to be seen. If AdSense and Ad Exchange are both providing backfill ads, this metric is the weighted average of the two backfill accounts (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers Backfill",
        "type": "METRIC",
        "uiName": "DFP Backfill Viewable Impressions %",
        "calculation": "none"
      },
      {
        "id": "ga:backfillClicks",
        "dataType": "INTEGER",
        "description": "The number of times backfill ads were clicked on the site. If AdSense and Ad Exchange are both providing backfill ads, this metric is the sum of the two backfill accounts (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers Backfill",
        "type": "METRIC",
        "uiName": "DFP Backfill Clicks",
        "calculation": "none"
      },
      {
        "id": "ga:backfillCTR",
        "dataType": "PERCENT",
        "description": "The percentage of backfill impressions that resulted in a click on an ad. If AdSense and Ad Exchange are both providing backfill ads, this metric is the weighted average of the two backfill accounts (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers Backfill",
        "type": "METRIC",
        "uiName": "DFP Backfill CTR",
        "calculation": "none"
      },
      {
        "id": "ga:backfillRevenue",
        "dataType": "CURRENCY",
        "description": "The total estimated revenue from backfill ads. If AdSense and Ad Exchange are both providing backfill ads, this metric is the sum of the two backfill accounts (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers Backfill",
        "type": "METRIC",
        "uiName": "DFP Backfill Revenue",
        "calculation": "none"
      },
      {
        "id": "ga:backfillRevenuePer1000Sessions",
        "dataType": "CURRENCY",
        "description": "The total estimated revenue from backfill ads per 1,000 Analytics sessions. Note that this metric is based on sessions to the site and not ad impressions. If both AdSense and Ad Exchange are providing backfill ads, this metric is the sum of the two backfill accounts (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers Backfill",
        "type": "METRIC",
        "uiName": "DFP Backfill Revenue / 1000 Sessions",
        "calculation": "none"
      },
      {
        "id": "ga:backfillECPM",
        "dataType": "CURRENCY",
        "description": "The effective cost per thousand pageviews. It is the DFP Backfill Revenue per 1,000 pageviews. If both AdSense and Ad Exchange are providing backfill ads, this metric is the sum of the two backfill accounts (DFP linking enabled and Hide DFP Revenue not enabled).",
        "group": "DoubleClick for Publishers Backfill",
        "type": "METRIC",
        "uiName": "DFP Backfill eCPM",
        "calculation": "none"
      },
      {
        "id": "ga:acquisitionCampaign",
        "dataType": "STRING",
        "description": "The campaign through which users were acquired, derived from users' first session.",
        "group": "Lifetime Value and Cohorts",
        "type": "DIMENSION",
        "uiName": "Acquisition Campaign",
        "calculation": "none"
      },
      {
        "id": "ga:acquisitionMedium",
        "dataType": "STRING",
        "description": "The medium through which users were acquired, derived from users' first session.",
        "group": "Lifetime Value and Cohorts",
        "type": "DIMENSION",
        "uiName": "Acquisition Medium",
        "calculation": "none"
      },
      {
        "id": "ga:acquisitionSource",
        "dataType": "STRING",
        "description": "The source through which users were acquired, derived from users' first session.",
        "group": "Lifetime Value and Cohorts",
        "type": "DIMENSION",
        "uiName": "Acquisition Source",
        "calculation": "none"
      },
      {
        "id": "ga:acquisitionSourceMedium",
        "dataType": "STRING",
        "description": "The combined value of ga:userAcquisitionSource and ga:acquisitionMedium.",
        "group": "Lifetime Value and Cohorts",
        "type": "DIMENSION",
        "uiName": "Acquisition Source / Medium",
        "calculation": "none"
      },
      {
        "id": "ga:acquisitionTrafficChannel",
        "dataType": "STRING",
        "description": "Traffic channel through which users were acquired. It is extracted from users' first session. Traffic channel is computed based on the default channel grouping rules (at view level if available) at the time of user acquisition.",
        "group": "Lifetime Value and Cohorts",
        "type": "DIMENSION",
        "uiName": "Acquisition Channel",
        "calculation": "none"
      },
      {
        "id": "ga:browserSize",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The viewport size of users' browsers. A session-scoped dimension, browser size captures the initial dimensions of the viewport in pixels and is formatted as width x height, for example, 1920x960.",
        "group": "Platform or Device",
        "type": "DIMENSION",
        "uiName": "Browser Size",
        "calculation": "none"
      },
      {
        "id": "ga:campaignCode",
        "dataType": "STRING",
        "description": "For manual campaign tracking, it is the value of the utm_id campaign tracking parameter.",
        "group": "Traffic Sources",
        "type": "DIMENSION",
        "uiName": "Campaign Code",
        "calculation": "none"
      },
      {
        "id": "ga:channelGrouping",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The default channel grouping shared within the View (Profile).",
        "group": "Channel Grouping",
        "type": "DIMENSION",
        "uiName": "Default Channel Grouping",
        "calculation": "none"
      },
      {
        "id": "ga:checkoutOptions",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "User options specified during the checkout process, e.g., FedEx, DHL, UPS for delivery options; Visa, MasterCard, AmEx for payment options. This dimension should be used with ga:shoppingStage (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Checkout Options",
        "calculation": "none"
      },
      {
        "id": "ga:cityId",
        "allowedInSegments": "false",
        "dataType": "STRING",
        "description": "Users' city ID, derived from their IP addresses or Geographical IDs. The city IDs are the same as the Criteria IDs found at https://developers.google.com/analytics/devguides/collection/protocol/v1/geoid.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "City ID",
        "calculation": "none"
      },
      {
        "id": "ga:cohort",
        "dataType": "STRING",
        "description": "Name of the cohort to which a user belongs. Depending on how cohorts are defined, a user can belong to multiple cohorts, similar to how a user can belong to multiple segments.",
        "group": "Lifetime Value and Cohorts",
        "type": "DIMENSION",
        "uiName": "Cohort",
        "calculation": "none"
      },
      {
        "id": "ga:cohortNthDay",
        "dataType": "STRING",
        "description": "Day offset relative to the cohort definition date. For example, if a cohort is defined with the first visit date as 2015-09-01, then for the date 2015-09-04, ga:cohortNthDay will be 3.",
        "group": "Lifetime Value and Cohorts",
        "type": "DIMENSION",
        "uiName": "Day",
        "calculation": "none"
      },
      {
        "id": "ga:cohortNthMonth",
        "dataType": "STRING",
        "description": "Month offset relative to the cohort definition date. The semantics of this dimension differs based on whether lifetime value is requested or not. For a cohorts report not requesting lifetime value: This is the week offset from the cohort definition start date. For example, if cohort is defined as 2015-09-01 <= first session date <= 2015-09-30. Then, for 2015-09-01 <= date <= 2015-09-30, ga:cohortNthMonth = 0. 2015-10-01 <= date <= 2015-10-31, ga:cohortNthMonth = 2. and so on. For a cohorts request requesting lifetime value: ga:cohortNthMonth is calculated relative to the users acquisition date. It is not dependent on the cohort definition date. For example, if we define a cohort as 2015-10-01 <= first session date <= 2015-09-30. And a user was acquired on 2015-09-04. Then, for 2015-09-04 <= date <= 2015-10-04, ga:cohortNthMonth = 0 2015-10-04 <= date <= 2015-11-04, ga:cohortNthMonth = 1, and so on.",
        "group": "Lifetime Value and Cohorts",
        "type": "DIMENSION",
        "uiName": "Month",
        "calculation": "none"
      },
      {
        "id": "ga:cohortNthWeek",
        "dataType": "STRING",
        "description": "Week offset relative to the cohort definition date. The semantics of this dimension differs based on whether lifetime value is requested or not. For a cohorts report not requesting lifetime value: This is the week offset from the cohort definition start date. For example, if cohort is defined as 2015-09-01 <= first session date <= 2015-09-07. Then, for 2015-09-01 <= date <= 2015-09-07, ga:cohortNthWeek = 0. 2015-09-08 <= date <= 2015-09-14, ga:cohortNthWeek = 1. etc. For a cohorts request requesting lifetime value: ga:cohortNthWeek is calculated relative to the users acquisition date. It is not dependent on the cohort definition date. For example, if we define a cohort as 2015-09-01 <= first session date <= 2015-09-07. And a user was acquired on 2015-09-04. Then, for 2015-09-04 <= date<= 2015-09-10, ga:cohortNthWeek = 0 2015-09-11 <= date <= 2015-09-17, ga:cohortNthWeek = 1",
        "group": "Lifetime Value and Cohorts",
        "type": "DIMENSION",
        "uiName": "Week",
        "calculation": "none"
      },
      {
        "id": "ga:continentId",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Users' continent ID, derived from users' IP addresses or Geographical IDs.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Continent ID",
        "calculation": "none"
      },
      {
        "id": "ga:correlationModelId",
        "dataType": "STRING",
        "description": "Correlation Model ID for related products.",
        "group": "Related Products",
        "type": "DIMENSION",
        "uiName": "Correlation Model ID",
        "calculation": "none"
      },
      {
        "id": "ga:countryIsoCode",
        "allowedInSegments": "false",
        "dataType": "STRING",
        "description": "Users' country's ISO code (in ISO-3166-1 alpha-2 format), derived from their IP addresses or Geographical IDs. For example, BR for Brazil, CA for Canada.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Country ISO Code",
        "calculation": "none"
      },
      {
        "id": "ga:dataSource",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The data source of a hit. By default, hits sent from analytics.js are reported as \"web\" and hits sent from the mobile SDKs are reported as \"app\". These values can be overridden in the Measurement Protocol.",
        "group": "Platform or Device",
        "type": "DIMENSION",
        "uiName": "Data Source",
        "calculation": "none"
      },
      {
        "id": "ga:dbmClickAdvertiser",
        "dataType": "STRING",
        "description": "DBM advertiser name of the DBM click matching the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Advertiser (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmClickAdvertiserId",
        "dataType": "STRING",
        "description": "DBM advertiser ID of the DBM click matching the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Advertiser ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmClickCreativeId",
        "dataType": "STRING",
        "description": "DBM creative ID of the DBM click matching the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Creative ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmClickExchange",
        "dataType": "STRING",
        "description": "DBM exchange name of the DBM click matching the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Exchange (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmClickExchangeId",
        "dataType": "STRING",
        "description": "DBM exchange ID of the DBM click matching the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Exchange ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmClickInsertionOrder",
        "dataType": "STRING",
        "description": "DBM insertion order name of the DBM click matching the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Insertion Order (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmClickInsertionOrderId",
        "dataType": "STRING",
        "description": "DBM insertion order ID of the DBM click matching the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Insertion Order ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmClickLineItem",
        "dataType": "STRING",
        "description": "DBM line item name of the DBM click matching the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Line Item NAME (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmClickLineItemId",
        "dataType": "STRING",
        "description": "DBM line item ID of the DBM click matching the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Line Item ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmClickSite",
        "dataType": "STRING",
        "description": "DBM site name where the DBM creative was shown and clicked on for the DBM click matching the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Site (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmClickSiteId",
        "dataType": "STRING",
        "description": "DBM site ID where the DBM creative was shown and clicked on for the DBM click matching the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Site ID (GA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmLastEventAdvertiser",
        "dataType": "STRING",
        "description": "DBM advertiser name of the last DBM event (impression or click within the DBM lookback window) associated with the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Advertiser (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmLastEventAdvertiserId",
        "dataType": "STRING",
        "description": "DBM advertiser ID of the last DBM event (impression or click within the DBM lookback window) associated with the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Advertiser ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmLastEventCreativeId",
        "dataType": "STRING",
        "description": "DBM creative ID of the last DBM event (impression or click within the DBM lookback window) associated with the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Creative ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmLastEventExchange",
        "dataType": "STRING",
        "description": "DBM exchange name of the last DBM event (impression or click within the DBM lookback window) associated with the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Exchange (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmLastEventExchangeId",
        "dataType": "STRING",
        "description": "DBM exchange ID of the last DBM event (impression or click within the DBM lookback window) associated with the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Exchange ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmLastEventInsertionOrder",
        "dataType": "STRING",
        "description": "DBM insertion order name of the last DBM event (impression or click within the DBM lookback window) associated with the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Insertion Order (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmLastEventInsertionOrderId",
        "dataType": "STRING",
        "description": "DBM insertion order ID of the last DBM event (impression or click within the DBM lookback window) associated with the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Insertion Order ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmLastEventLineItem",
        "dataType": "STRING",
        "description": "DBM line item name of the last DBM event (impression or click within the DBM lookback window) associated with the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Line Item (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmLastEventLineItemId",
        "dataType": "STRING",
        "description": "DBM line item ID of the last DBM event (impression or click within the DBM lookback window) associated with the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Line Item ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmLastEventSite",
        "dataType": "STRING",
        "description": "DBM site name where the DBM creative was shown and clicked on for the last DBM event (impression or click within the DBM lookback window) associated with the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Site (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dbmLastEventSiteId",
        "dataType": "STRING",
        "description": "DBM site ID where the DBM creative was shown and clicked on for the last DBM event (impression or click within the DBM lookback window) associated with the Google Analytics session (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "DIMENSION",
        "uiName": "DBM Site ID (DFA Model)",
        "calculation": "none"
      },
      {
        "id": "ga:dsAdGroup",
        "dataType": "STRING",
        "description": "DS Ad Group (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "DIMENSION",
        "uiName": "DS Ad Group",
        "calculation": "none"
      },
      {
        "id": "ga:dsAdGroupId",
        "dataType": "STRING",
        "description": "DS Ad Group ID (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "DIMENSION",
        "uiName": "DS Ad Group ID",
        "calculation": "none"
      },
      {
        "id": "ga:dsAdvertiser",
        "dataType": "STRING",
        "description": "DS Advertiser (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "DIMENSION",
        "uiName": "DS Advertiser",
        "calculation": "none"
      },
      {
        "id": "ga:dsAdvertiserId",
        "dataType": "STRING",
        "description": "DS Advertiser ID (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "DIMENSION",
        "uiName": "DS Advertiser ID",
        "calculation": "none"
      },
      {
        "id": "ga:dsAgency",
        "dataType": "STRING",
        "description": "DS Agency (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "DIMENSION",
        "uiName": "DS Agency",
        "calculation": "none"
      },
      {
        "id": "ga:dsAgencyId",
        "dataType": "STRING",
        "description": "DS Agency ID (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "DIMENSION",
        "uiName": "DS Agency ID",
        "calculation": "none"
      },
      {
        "id": "ga:dsCampaign",
        "dataType": "STRING",
        "description": "DS Campaign (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "DIMENSION",
        "uiName": "DS Campaign",
        "calculation": "none"
      },
      {
        "id": "ga:dsCampaignId",
        "dataType": "STRING",
        "description": "DS Campaign ID (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "DIMENSION",
        "uiName": "DS Campaign ID",
        "calculation": "none"
      },
      {
        "id": "ga:dsEngineAccount",
        "dataType": "STRING",
        "description": "DS Engine Account (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "DIMENSION",
        "uiName": "DS Engine Account",
        "calculation": "none"
      },
      {
        "id": "ga:dsEngineAccountId",
        "dataType": "STRING",
        "description": "DS Engine Account ID (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "DIMENSION",
        "uiName": "DS Engine Account ID",
        "calculation": "none"
      },
      {
        "id": "ga:dsKeyword",
        "dataType": "STRING",
        "description": "DS Keyword (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "DIMENSION",
        "uiName": "DS Keyword",
        "calculation": "none"
      },
      {
        "id": "ga:dsKeywordId",
        "dataType": "STRING",
        "description": "DS Keyword ID (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "DIMENSION",
        "uiName": "DS Keyword ID",
        "calculation": "none"
      },
      {
        "id": "ga:internalPromotionCreative",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The creative content designed for a promotion (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Internal Promotion Creative",
        "calculation": "none"
      },
      {
        "id": "ga:internalPromotionId",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The ID of the promotion (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Internal Promotion ID",
        "calculation": "none"
      },
      {
        "id": "ga:internalPromotionName",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The name of the promotion (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Internal Promotion Name",
        "calculation": "none"
      },
      {
        "id": "ga:internalPromotionPosition",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The position of the promotion on the web page or application screen (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Internal Promotion Position",
        "calculation": "none"
      },
      {
        "id": "ga:isTrueViewVideoAd",
        "dataType": "STRING",
        "description": "A boolean, Yes or No, indicating whether the ad is an AdWords TrueView video ad.",
        "group": "Adwords",
        "type": "DIMENSION",
        "uiName": "TrueView Video Ad",
        "calculation": "none"
      },
      {
        "id": "ga:metroId",
        "dataType": "STRING",
        "description": "The three digit Designated Market Area (DMA) code from where traffic arrived, derived from users' IP addresses or Geographical IDs.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Metro Id",
        "calculation": "none"
      },
      {
        "id": "ga:nthHour",
        "dataType": "STRING",
        "description": "The index for each hour in the specified date range. The index for the first hour of the first day (i.e., start-date) in the date range is 0, for the next hour 1, and so on.",
        "group": "Time",
        "type": "DIMENSION",
        "uiName": "Hour Index",
        "calculation": "none"
      },
      {
        "id": "ga:orderCouponCode",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Code for the order-level coupon (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Order Coupon Code",
        "calculation": "none"
      },
      {
        "id": "ga:productBrand",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The brand name under which the product is sold (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Product Brand",
        "calculation": "none"
      },
      {
        "id": "ga:productCategoryHierarchy",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The hierarchical category in which the product is classified (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Product Category (Enhanced Ecommerce)",
        "calculation": "none"
      },
      {
        "id": "ga:productCategoryLevelXX",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Level (1-5) in the product category hierarchy, starting from the top (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Product Category Level XX",
        "calculation": "none"
      },
      {
        "id": "ga:productCouponCode",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Code for the product-level coupon (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Product Coupon Code",
        "calculation": "none"
      },
      {
        "id": "ga:productListName",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The name of the product list in which the product appears (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Product List Name",
        "calculation": "none"
      },
      {
        "id": "ga:productListPosition",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The position of the product in the product list (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Product List Position",
        "calculation": "none"
      },
      {
        "id": "ga:productVariant",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "The specific variation of a product, e.g., XS, S, M, L for size; or Red, Blue, Green, Black for color (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Product Variant",
        "calculation": "none"
      },
      {
        "id": "ga:queryProductId",
        "dataType": "STRING",
        "description": "ID of the product being queried.",
        "group": "Related Products",
        "type": "DIMENSION",
        "uiName": "Queried Product ID",
        "calculation": "none"
      },
      {
        "id": "ga:queryProductName",
        "dataType": "STRING",
        "description": "Name of the product being queried.",
        "group": "Related Products",
        "type": "DIMENSION",
        "uiName": "Queried Product Name",
        "calculation": "none"
      },
      {
        "id": "ga:queryProductVariation",
        "dataType": "STRING",
        "description": "Variation of the product being queried.",
        "group": "Related Products",
        "type": "DIMENSION",
        "uiName": "Queried Product Variation",
        "calculation": "none"
      },
      {
        "id": "ga:regionId",
        "allowedInSegments": "false",
        "dataType": "STRING",
        "description": "Users' region ID, derived from their IP addresses or Geographical IDs. In U.S., a region is a state, New York, for example. The region IDs are the same as the Criteria IDs listed at https://developers.google.com/analytics/devguides/collection/protocol/v1/geoid.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Region ID",
        "calculation": "none"
      },
      {
        "id": "ga:regionIsoCode",
        "allowedInSegments": "false",
        "dataType": "STRING",
        "description": "Users' region ISO code in ISO-3166-2 format, derived from their IP addresses or Geographical IDs.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Region ISO Code",
        "calculation": "none"
      },
      {
        "id": "ga:relatedProductId",
        "dataType": "STRING",
        "description": "ID of the related product.",
        "group": "Related Products",
        "type": "DIMENSION",
        "uiName": "Related Product ID",
        "calculation": "none"
      },
      {
        "id": "ga:relatedProductName",
        "dataType": "STRING",
        "description": "Name of the related product.",
        "group": "Related Products",
        "type": "DIMENSION",
        "uiName": "Related Product Name",
        "calculation": "none"
      },
      {
        "id": "ga:relatedProductVariation",
        "dataType": "STRING",
        "description": "Variation of the related product.",
        "group": "Related Products",
        "type": "DIMENSION",
        "uiName": "Related Product Variation",
        "calculation": "none"
      },
      {
        "id": "ga:shoppingStage",
        "allowedInSegments": "true",
        "dataType": "STRING",
        "description": "Various stages of the shopping experience that users completed in a session, e.g., PRODUCT_VIEW, ADD_TO_CART, CHECKOUT, etc. (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "DIMENSION",
        "uiName": "Shopping Stage",
        "calculation": "none"
      },
      {
        "id": "ga:subContinentCode",
        "dataType": "STRING",
        "description": "Users' sub-continent code in UN M.49 format, derived from their IP addresses or Geographical IDs. For example, 061 for Polynesia, 154 for Northern Europe.",
        "group": "Geo Network",
        "type": "DIMENSION",
        "uiName": "Sub Continent Code",
        "calculation": "none"
      },
      {
        "id": "ga:buyToDetailRate",
        "dataType": "PERCENT",
        "description": "Unique purchases divided by views of product detail pages (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Buy-to-Detail Rate",
        "calculation": "none"
      },
      {
        "id": "ga:calcMetric_<NAME>",
        "dataType": "INTEGER",
        "description": "The value of the requested calculated metric, where <NAME> refers to the user-defined name of the calculated metric. Note that the data type of ga:calcMetric_<NAME> can be FLOAT, INTEGER, CURRENCY, TIME, or PERCENT. For details, see https://support.google.com/analytics/answer/6121409.",
        "group": "Custom Variables or Columns",
        "type": "METRIC",
        "uiName": "Calculated Metric",
        "calculation": "none"
      },
      {
        "id": "ga:cartToDetailRate",
        "dataType": "PERCENT",
        "description": "Product adds divided by views of product details (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Cart-to-Detail Rate",
        "calculation": "none"
      },
      {
        "id": "ga:cohortActiveUsers",
        "dataType": "INTEGER",
        "description": "This metric is relevant in the context of ga:cohortNthDay/ga:cohortNthWeek/ga:cohortNthMonth. It indicates the number of users in the cohort who are active in the time window corresponding to the cohort nth day/week/month. For example, for ga:cohortNthWeek = 1, number of users (in the cohort) who are active in week 1. If a request doesn't have any of ga:cohortNthDay/ga:cohortNthWeek/ga:cohortNthMonth, this metric will have the same value as ga:cohortTotalUsers.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Users",
        "calculation": "none"
      },
      {
        "id": "ga:cohortAppviewsPerUser",
        "dataType": "FLOAT",
        "description": "App views per user for a cohort.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Appviews per User",
        "calculation": "ga:appviews / ga:cohortTotalUsers"
      },
      {
        "id": "ga:cohortAppviewsPerUserWithLifetimeCriteria",
        "dataType": "FLOAT",
        "description": "App views per user for the acquisition dimension for a cohort.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Appviews Per User (LTV)",
        "calculation": "ga:appviews / ga:cohortTotalUsersWithLifetimeCriteria"
      },
      {
        "id": "ga:cohortGoalCompletionsPerUser",
        "dataType": "FLOAT",
        "description": "Goal completions per user for the acquisition dimension for a cohort.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Goal Completions per User",
        "calculation": "ga:goalCompletionsAll / ga:cohortTotalUsers"
      },
      {
        "id": "ga:cohortGoalCompletionsPerUserWithLifetimeCriteria",
        "dataType": "FLOAT",
        "description": "Goal completions per user for a cohort.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Goal Completions Per User (LTV)",
        "calculation": "ga:goalCompletionsAll / ga:cohortTotalUsersWithLifetimeCriteria"
      },
      {
        "id": "ga:cohortPageviewsPerUser",
        "dataType": "FLOAT",
        "description": "Pageviews per user for a cohort.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Pageviews per User",
        "calculation": "ga:pageviews / ga:cohortTotalUsers"
      },
      {
        "id": "ga:cohortPageviewsPerUserWithLifetimeCriteria",
        "dataType": "FLOAT",
        "description": "Pageviews per user for the acquisition dimension for a cohort.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Pageviews Per User (LTV)",
        "calculation": "ga:pageviews / ga:cohortTotalUsersWithLifetimeCriteria"
      },
      {
        "id": "ga:cohortRetentionRate",
        "dataType": "PERCENT",
        "description": "Cohort retention rate.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "User Retention",
        "calculation": "ga:cohortActiveUsers / ga:cohortTotalUsers"
      },
      {
        "id": "ga:cohortRevenuePerUser",
        "dataType": "CURRENCY",
        "description": "Revenue per user for a cohort.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Revenue per User",
        "calculation": "ga:transactions / ga:cohortTotalUsers"
      },
      {
        "id": "ga:cohortRevenuePerUserWithLifetimeCriteria",
        "dataType": "CURRENCY",
        "description": "Revenue per user for the acquisition dimension for a cohort.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Revenue Per User (LTV)",
        "calculation": "ga:transactionRevenue / ga:cohortTotalUsersWithLifetimeCriteria"
      },
      {
        "id": "ga:cohortSessionDurationPerUser",
        "dataType": "TIME",
        "description": "Session duration per user for a cohort.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Session Duration per User",
        "calculation": "ga:sessionDuration / ga:cohortTotalUsers"
      },
      {
        "id": "ga:cohortSessionDurationPerUserWithLifetimeCriteria",
        "dataType": "TIME",
        "description": "Session duration per user for the acquisition dimension for a cohort.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Session Duration Per User (LTV)",
        "calculation": "ga:sessionDuration / ga:cohortTotalUsersWithLifetimeCriteria"
      },
      {
        "id": "ga:cohortSessionsPerUser",
        "dataType": "FLOAT",
        "description": "Sessions per user for a cohort.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Sessions per User",
        "calculation": "ga:sessions / ga:cohortTotalUsers"
      },
      {
        "id": "ga:cohortSessionsPerUserWithLifetimeCriteria",
        "dataType": "FLOAT",
        "description": "Sessions per user for the acquisition dimension for a cohort.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Sessions Per User (LTV)",
        "calculation": "ga:sessions / ga:cohortTotalUsersWithLifetimeCriteria"
      },
      {
        "id": "ga:cohortTotalUsers",
        "dataType": "INTEGER",
        "description": "Number of users belonging to the cohort, also known as cohort size.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Total Users",
        "calculation": "none"
      },
      {
        "id": "ga:cohortTotalUsersWithLifetimeCriteria",
        "dataType": "INTEGER",
        "description": "This is relevant in the context of a request which has the dimensions ga:acquisitionTrafficChannel/ga:acquisitionSource/ga:acquisitionMedium/ga:acquisitionCampaign. It represents the number of users in the cohorts who are acquired through the current channel/source/medium/campaign. For example, for ga:acquisitionTrafficChannel=Direct, it represents the number users in the cohort, who were acquired directly. If none of these mentioned dimensions are present, then its value is equal to ga:cohortTotalUsers.",
        "group": "Lifetime Value and Cohorts",
        "type": "METRIC",
        "uiName": "Users",
        "calculation": "none"
      },
      {
        "id": "ga:correlationScore",
        "dataType": "CURRENCY",
        "description": "Correlation Score for related products.",
        "group": "Related Products",
        "type": "METRIC",
        "uiName": "Correlation Score",
        "calculation": "none"
      },
      {
        "id": "ga:dbmCPA",
        "dataType": "CURRENCY",
        "description": "DBM Revenue eCPA (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "METRIC",
        "uiName": "DBM eCPA",
        "calculation": "ga:dbmCost / ga:dbmConversions"
      },
      {
        "id": "ga:dbmCPC",
        "dataType": "CURRENCY",
        "description": "DBM Revenue eCPC (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "METRIC",
        "uiName": "DBM eCPC",
        "calculation": "ga:dbmCost / ga:dbmClicks"
      },
      {
        "id": "ga:dbmCPM",
        "dataType": "CURRENCY",
        "description": "DBM Revenue eCPM (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "METRIC",
        "uiName": "DBM eCPM",
        "calculation": "ga:dbmCost / (ga:dbmImpressions / 1000)"
      },
      {
        "id": "ga:dbmCTR",
        "dataType": "PERCENT",
        "description": "DBM CTR (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "METRIC",
        "uiName": "DBM CTR",
        "calculation": "ga:dbmClicks / ga:dbmImpressions"
      },
      {
        "id": "ga:dbmClicks",
        "dataType": "INTEGER",
        "description": "DBM Total Clicks (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "METRIC",
        "uiName": "DBM Clicks",
        "calculation": "none"
      },
      {
        "id": "ga:dbmConversions",
        "dataType": "INTEGER",
        "description": "DBM Total Conversions (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "METRIC",
        "uiName": "DBM Conversions",
        "calculation": "none"
      },
      {
        "id": "ga:dbmCost",
        "dataType": "CURRENCY",
        "description": "DBM Cost (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "METRIC",
        "uiName": "DBM Cost",
        "calculation": "none"
      },
      {
        "id": "ga:dbmImpressions",
        "dataType": "INTEGER",
        "description": "DBM Total Impressions (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "METRIC",
        "uiName": "DBM Impressions",
        "calculation": "none"
      },
      {
        "id": "ga:dbmROAS",
        "dataType": "PERCENT",
        "description": "DBM ROAS (Analytics 360 only, requires integration with DBM).",
        "group": "DoubleClick Bid Manager",
        "type": "METRIC",
        "uiName": "DBM ROAS",
        "calculation": "(ga:transactionRevenue + ga:goalValueAll) / ga:dbmCost"
      },
      {
        "id": "ga:dcmCPC",
        "dataType": "CURRENCY",
        "description": "DCM Cost Per Click (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "METRIC",
        "uiName": "DFA CPC",
        "calculation": "none"
      },
      {
        "id": "ga:dcmCTR",
        "dataType": "PERCENT",
        "description": "DCM Click Through Rate (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "METRIC",
        "uiName": "DFA CTR",
        "calculation": "none"
      },
      {
        "id": "ga:dcmClicks",
        "dataType": "INTEGER",
        "description": "DCM Total Clicks (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "METRIC",
        "uiName": "DFA Clicks",
        "calculation": "none"
      },
      {
        "id": "ga:dcmCost",
        "dataType": "CURRENCY",
        "description": "DCM Total Cost (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "METRIC",
        "uiName": "DFA Cost",
        "calculation": "none"
      },
      {
        "id": "ga:dcmImpressions",
        "dataType": "INTEGER",
        "description": "DCM Total Impressions (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "METRIC",
        "uiName": "DFA Impressions",
        "calculation": "none"
      },
      {
        "id": "ga:dcmROAS",
        "dataType": "PERCENT",
        "description": "DCM Return On Ad Spend (ROAS) (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "METRIC",
        "uiName": "DFA ROAS",
        "calculation": "none"
      },
      {
        "id": "ga:dcmRPC",
        "dataType": "CURRENCY",
        "description": "DCM Revenue Per Click (Analytics 360 only).",
        "group": "DoubleClick Campaign Manager",
        "type": "METRIC",
        "uiName": "DFA RPC",
        "calculation": "none"
      },
      {
        "id": "ga:dsCPC",
        "dataType": "CURRENCY",
        "description": "DS Cost to advertiser per click (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "METRIC",
        "uiName": "DS CPC",
        "calculation": "ga:dsCost/ga:dsClicks"
      },
      {
        "id": "ga:dsCTR",
        "dataType": "PERCENT",
        "description": "DS Click Through Rate (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "METRIC",
        "uiName": "DS CTR",
        "calculation": "ga:dsClicks/ga:dsImpressions"
      },
      {
        "id": "ga:dsClicks",
        "dataType": "INTEGER",
        "description": "DS Clicks (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "METRIC",
        "uiName": "DS Clicks",
        "calculation": "none"
      },
      {
        "id": "ga:dsCost",
        "dataType": "CURRENCY",
        "description": "DS Cost (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "METRIC",
        "uiName": "DS Cost",
        "calculation": "none"
      },
      {
        "id": "ga:dsImpressions",
        "dataType": "INTEGER",
        "description": "DS Impressions (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "METRIC",
        "uiName": "DS Impressions",
        "calculation": "none"
      },
      {
        "id": "ga:dsProfit",
        "dataType": "CURRENCY",
        "description": "DS Profie (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "METRIC",
        "uiName": "DS Profit",
        "calculation": "(ga:transactionRevenue + ga:goalValueAll - ga:dsCost)"
      },
      {
        "id": "ga:dsReturnOnAdSpend",
        "dataType": "PERCENT",
        "description": "DS Return On Ad Spend (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "METRIC",
        "uiName": "DS ROAS",
        "calculation": "(ga:transactionRevenue + ga:goalValueAll) / ga:dsCost"
      },
      {
        "id": "ga:dsRevenuePerClick",
        "dataType": "CURRENCY",
        "description": "DS Revenue Per Click (Analytics 360 only, requires integration with DS).",
        "group": "DoubleClick Search",
        "type": "METRIC",
        "uiName": "DS RPC",
        "calculation": "(ga:transactionRevenue + ga:goalValueAll) / ga:dsClicks"
      },
      {
        "id": "ga:hits",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Total number of hits for the view (profile). This metric sums all hit types, including pageview, custom event, ecommerce, and other types. Because this metric is based on the view (profile), not on the property, it is not the same as the property's hit volume.",
        "group": "Session",
        "type": "METRIC",
        "uiName": "Hits",
        "calculation": "none"
      },
      {
        "id": "ga:internalPromotionCTR",
        "dataType": "PERCENT",
        "description": "The rate at which users clicked through to view the internal promotion (ga:internalPromotionClicks / ga:internalPromotionViews) - (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Internal Promotion CTR",
        "calculation": "ga:internalPromotionClicks / ga:internalPromotionViews"
      },
      {
        "id": "ga:internalPromotionClicks",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of clicks on an internal promotion (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Internal Promotion Clicks",
        "calculation": "none"
      },
      {
        "id": "ga:internalPromotionViews",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "The number of views of an internal promotion (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Internal Promotion Views",
        "calculation": "none"
      },
      {
        "id": "ga:localProductRefundAmount",
        "allowedInSegments": "true",
        "dataType": "CURRENCY",
        "description": "Refund amount in local currency for a given product (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Local Product Refund Amount",
        "calculation": "none"
      },
      {
        "id": "ga:localRefundAmount",
        "allowedInSegments": "true",
        "dataType": "CURRENCY",
        "description": "Total refund amount in local currency for the transaction (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Local Refund Amount",
        "calculation": "none"
      },
      {
        "id": "ga:productAddsToCart",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Number of times the product was added to the shopping cart (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Product Adds To Cart",
        "calculation": "none"
      },
      {
        "id": "ga:productCheckouts",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Number of times the product was included in the check-out process (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Product Checkouts",
        "calculation": "none"
      },
      {
        "id": "ga:productDetailViews",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Number of times users viewed the product-detail page (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Product Detail Views",
        "calculation": "none"
      },
      {
        "id": "ga:productListCTR",
        "dataType": "PERCENT",
        "description": "The rate at which users clicked through on the product in a product list (ga:productListClicks / ga:productListViews) - (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Product List CTR",
        "calculation": "ga:productListClicks / ga:productListViews"
      },
      {
        "id": "ga:productListClicks",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Number of times users clicked the product when it appeared in the product list (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Product List Clicks",
        "calculation": "none"
      },
      {
        "id": "ga:productListViews",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Number of times the product appeared in a product list (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Product List Views",
        "calculation": "none"
      },
      {
        "id": "ga:productRefundAmount",
        "allowedInSegments": "true",
        "dataType": "CURRENCY",
        "description": "Total refund amount associated with the product (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Product Refund Amount",
        "calculation": "none"
      },
      {
        "id": "ga:productRefunds",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Number of times a refund was issued for the product (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Product Refunds",
        "calculation": "none"
      },
      {
        "id": "ga:productRemovesFromCart",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Number of times the product was removed from the shopping cart (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Product Removes From Cart",
        "calculation": "none"
      },
      {
        "id": "ga:productRevenuePerPurchase",
        "dataType": "CURRENCY",
        "description": "Average product revenue per purchase (commonly used with Product Coupon Code) (ga:itemRevenue / ga:uniquePurchases) - (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Product Revenue per Purchase",
        "calculation": "ga:itemRevenue / ga:uniquePurchases"
      },
      {
        "id": "ga:quantityAddedToCart",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Number of product units added to the shopping cart (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Quantity Added To Cart",
        "calculation": "none"
      },
      {
        "id": "ga:quantityCheckedOut",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Number of product units included in check out (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Quantity Checked Out",
        "calculation": "none"
      },
      {
        "id": "ga:quantityRefunded",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Number of product units refunded (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Quantity Refunded",
        "calculation": "none"
      },
      {
        "id": "ga:quantityRemovedFromCart",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Number of product units removed from a shopping cart (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Quantity Removed From Cart",
        "calculation": "none"
      },
      {
        "id": "ga:queryProductQuantity",
        "dataType": "INTEGER",
        "description": "Quantity of the product being queried.",
        "group": "Related Products",
        "type": "METRIC",
        "uiName": "Queried Product Quantity",
        "calculation": "none"
      },
      {
        "id": "ga:refundAmount",
        "allowedInSegments": "true",
        "dataType": "CURRENCY",
        "description": "Currency amount refunded for a transaction (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Refund Amount",
        "calculation": "none"
      },
      {
        "id": "ga:relatedProductQuantity",
        "dataType": "INTEGER",
        "description": "Quantity of the related product.",
        "group": "Related Products",
        "type": "METRIC",
        "uiName": "Related Product Quantity",
        "calculation": "none"
      },
      {
        "id": "ga:revenuePerUser",
        "allowedInSegments": "false",
        "dataType": "CURRENCY",
        "description": "The total sale revenue (excluding shipping and tax) of the transaction divided by the total number of users.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Revenue per User",
        "calculation": "none"
      },
      {
        "id": "ga:sessionsPerUser",
        "allowedInSegments": "false",
        "dataType": "FLOAT",
        "description": "The total number of sessions divided by the total number of users.",
        "group": "User",
        "type": "METRIC",
        "uiName": "Number of Sessions per User",
        "calculation": "none"
      },
      {
        "id": "ga:totalRefunds",
        "allowedInSegments": "true",
        "dataType": "INTEGER",
        "description": "Number of refunds that have been issued (Enhanced Ecommerce).",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Refunds",
        "calculation": "none"
      },
      {
        "id": "ga:transactionsPerUser",
        "allowedInSegments": "false",
        "dataType": "FLOAT",
        "description": "Total number of transactions divided by total number of users.",
        "group": "Ecommerce",
        "type": "METRIC",
        "uiName": "Transactions per User",
        "calculation": "none"
      }
    ]

  });
