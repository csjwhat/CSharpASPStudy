CREATE TABLE [dbo].[Products]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY,
	[Title] NVARCHAR(200) NOT NULL,
	[ProductUrl] NVARCHAR(2100) NULL,
	[DownloadUrl] NVARCHAR(2100) NULL, 
    [Description ] NVARCHAR(MAX) NULL, 
    [Publisher] NVARCHAR(200) NULL, 
    [PublisherUrl] NVARCHAR(2100) NULL, 
    [ImageUrl] NVARCHAR(2100) NULL, 
    [Price] MONEY NULL
)
