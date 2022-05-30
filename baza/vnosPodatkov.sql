INSERT INTO `categories` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
('327895f2-bca6-413f-a20c-2d30a34eb2e0', 'Laptop Hp', 'prenosni racunalnik', '2022-05-30 13:01:15', '2022-05-30 13:01:15'),
('3f07fd21-01c1-4b0b-9910-9e3954faedf0', 'Laptop Lenovo', 'prenosni racunalnik', '2022-05-30 13:02:18', '2022-05-30 13:02:18'),
('6a752188-cc6f-4d8a-ac77-638fdcb3939d', 'Stol', NULL, '2022-05-30 13:10:48', '2022-05-30 13:10:48'),
('903c74f6-1578-4f09-95e0-3b80c7988155', 'Pisarniska Miza', NULL, '2022-05-30 13:10:29', '2022-05-30 13:10:29'),
('9454d80d-88c6-47b9-9560-da9d5523a3bd', 'Monitor Mali', 'velikost 24 inch;', '2022-05-30 13:06:04', '2022-05-30 13:08:55'),
('aaece969-3bd1-44c9-bc3c-752b4d6b4015', 'Macbook', 'prenosni racunalnik', '2022-05-30 13:04:57', '2022-05-30 13:04:57'),
('b20fcc9a-da66-4ccb-bc0f-dcc70d3d6aa8', 'Laptop Asus', 'prenosni racunalnik', '2022-05-30 13:01:59', '2022-05-30 13:01:59'),
('c276f1af-c5ec-4be6-a2d9-95481f3947eb', 'Laptop Dell', 'prenosni racunalnik', '2022-05-30 13:01:43', '2022-05-30 13:01:43'),
('c8c8c25c-93f3-48a8-8c33-9380ca44694d', 'Monitor Veliki', 'velikost 34 inch;', '2022-05-30 13:07:03', '2022-05-30 13:09:17'),
('cf87334c-7a30-459a-8bb5-ba6765b26cef', 'Docking Station', 'Priklopna postaja', '2022-05-30 13:10:08', '2022-05-30 13:10:08'),
('fdea2ab4-9f20-4d18-a2ac-ec379087e4ab', 'Monitor Srednji', 'velikost 27 inch;', '2022-05-30 13:06:34', '2022-05-30 13:09:07');

INSERT INTO `products` (`id`, `name`, `unitCost`, `unitPrice`, `store`, `counter`, `description`, `createdAt`, `updatedAt`, `categoryId`) VALUES
('051ac803-7d97-4e57-b64c-5d5105fb1404', 'Laptopmiha', '662HKUI7682', '662', '2022-05-14', 'MacBookPro', 'MacBook', '2022-05-30 16:16:38', '2022-05-30 16:16:38', 'aaece969-3bd1-44c9-bc3c-752b4d6b4015'),
('1d859ab8-c58b-4931-97fb-c123213ab395', 'Mizamiha', '324DGJSK32', '324', '2022-05-08', 'Yaasa', 'Pisarniska miza za miho', '2022-05-30 16:29:54', '2022-05-30 16:29:54', '903c74f6-1578-4f09-95e0-3b80c7988155'),
('2072aa11-f5d0-4aaf-8ef1-9da424696642', 'Mizajure', '889GHJHG56', '889', '2022-04-28', 'Yaasa', 'Pisarniska miza za Jureta', '2022-05-30 16:26:33', '2022-05-30 16:26:33', '903c74f6-1578-4f09-95e0-3b80c7988155'),
('4ba557cc-5dfc-4fb2-ad20-7bd5dd7380e2', 'Monitorjure2', '489UIOT73489', '489', '2022-05-30', 'C27F390FH', 'Monitor Jure 2', '2022-05-30 16:19:42', '2022-05-30 16:19:42', 'c8c8c25c-93f3-48a8-8c33-9380ca44694d'),
('4e4ffb6d-9f1d-4537-a968-11d190a800d6', 'Laptopeleonora', '334TTZXDJ43856', '334', '2022-05-30', 'IdeaPad', 'Eleonorin laptop', '2022-05-30 16:06:43', '2022-05-30 16:06:43', '3f07fd21-01c1-4b0b-9910-9e3954faedf0'),
('57bf34ab-6678-49ff-a6fb-7d0c7f52e8a4', 'Stoleleonora', '999JKDSA732', '999', '2022-05-05', '309', 'Stol za eleonoro', '2022-05-30 16:34:17', '2022-05-30 16:34:17', '6a752188-cc6f-4d8a-ac77-638fdcb3939d'),
('60e7701e-9048-4303-8522-d370dd1e10b1', 'Laptopjure', '2134RTLX3286492', '213', '2010-02-28', 'G770', 'Kupljen prenosni racunalnik', '2022-05-30 16:00:53', '2022-05-30 16:02:07', '3f07fd21-01c1-4b0b-9910-9e3954faedf0'),
('641f4fb7-1b12-4ba8-a75a-e04410d7a1fb', 'Stoljure', '222GKSJJ900', '222', '2022-05-13', '309', 'Jure stol', '2022-05-30 16:32:17', '2022-05-30 16:32:17', '6a752188-cc6f-4d8a-ac77-638fdcb3939d'),
('755affbf-938c-4656-a1ff-8e185f33e294', 'Stolmiha', '454SKDHS54', '454', '2022-05-10', '309', 'Stol Miha', '2022-05-30 16:33:24', '2022-05-30 16:33:24', '6a752188-cc6f-4d8a-ac77-638fdcb3939d'),
('7eab6f95-4639-48c9-8e26-6157e3ed0f2c', 'Monitormiha2', '223HGF763293H', '223', '2022-05-23', 'C24RG50FQR', 'Monitor miha 2', '2022-05-30 16:22:57', '2022-05-30 16:22:57', 'fdea2ab4-9f20-4d18-a2ac-ec379087e4ab'),
('870040bf-0ab0-4843-8ada-100caf2c1373', 'Priklopnapostajaanja', '789SJASKJ67', '789', '2022-05-19', 'HPHyperXPulsfire', 'Priklopna postaja za anjo', '2022-05-30 16:36:30', '2022-05-30 16:36:30', 'cf87334c-7a30-459a-8bb5-ba6765b26cef'),
('911fd61d-c607-4fcb-b761-7f362cdc7f2e', 'Priklopnapostajanik', '887GJGJK67', '887', '2022-05-08', 'HPHyperXPulsfire', 'Priklopna postaja za Nika', '2022-05-30 16:37:30', '2022-05-30 16:37:30', 'cf87334c-7a30-459a-8bb5-ba6765b26cef'),
('98b3e4af-9eda-45b9-83b9-53b54bd82e41', 'Monitoreleonora', '123OIUOB34', '123', '2022-05-07', 'C45JKDHF34', 'Monitor Eleonora', '2022-05-30 16:24:15', '2022-05-30 16:24:15', '9454d80d-88c6-47b9-9560-da9d5523a3bd'),
('9bd6c065-c1d0-4ca2-a95f-a4f9876b36ff', 'Monitormiha1', '678TUKKHJ56', '678', '2022-05-21', 'C24RG50FQR', 'MonitorMiha1', '2022-05-30 16:21:23', '2022-05-30 16:21:39', 'fdea2ab4-9f20-4d18-a2ac-ec379087e4ab'),
('ef661e3f-111e-4ed5-bb50-2f04b7248343', 'Mizaeleonora', '566GJHSAD78', '566', '2022-05-13', 'Yaasa', 'Miza za Eleonoro', '2022-05-30 16:30:44', '2022-05-30 16:30:44', '903c74f6-1578-4f09-95e0-3b80c7988155'),
('f1c7416e-c496-41af-a086-a13fa105aa29', 'Monitorjure', '497SAFD32785', '497', '2022-05-22', 'C27F390FH', 'Monitor jure 1', '2022-05-30 16:18:27', '2022-05-30 16:18:27', 'c8c8c25c-93f3-48a8-8c33-9380ca44694d');

INSERT INTO `suppliers` (`id`, `name`, `phone`, `email`, `createdAt`, `updatedAt`) VALUES
('30ea9cff-617c-417b-9417-92ba97d150bd', 'Anja', '041567497', 'anja@gmail.com', '2022-05-30 15:54:18', '2022-05-30 15:55:03'),
('311fff50-56ae-4071-a4f2-2b4a3963d85f', 'Nik', '031497567', 'nik@gmail.com', '2022-05-30 15:53:46', '2022-05-30 15:53:46'),
('44861006-c4db-4846-b4c9-d3c4e5d1bb01', 'Jure Trtnik', '031456789', 'jure.trtnik@student.um.si', '2022-05-30 15:42:22', '2022-05-30 15:42:22'),
('889850f6-8de3-4ade-86bf-8996b92e0f7e', 'Eleonora Loshkoska', '041654497', 'eleonora.loshkoska@student.um.si', '2022-05-30 15:47:01', '2022-05-30 15:47:01'),
('c729430b-f4ba-4b8d-b824-cb83ca712c44', 'Lan', '070445789', 'lan@gmail.com', '2022-05-30 15:54:55', '2022-05-30 15:54:55'),
('db3044d4-2df9-42a0-9156-9e8bf0a56a2a', 'Miha Mir', '070898980', 'miha.mir@student.um.si', '2022-05-30 15:47:45', '2022-05-30 15:47:57');

