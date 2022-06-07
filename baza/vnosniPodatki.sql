INSERT INTO `categories` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
('327895f2-bca6-413f-a20c-2d30a34eb2e0', 'Laptop Hp', 'prenosni racunalnik', '2022-05-30 13:01:15', '2022-05-30 13:01:15'),
('3f07fd21-01c1-4b0b-9910-9e3954faedf0', 'Laptop Lenovo', 'prenosni racunalnik', '2022-05-30 13:02:18', '2022-05-30 13:02:18'),
('6a752188-cc6f-4d8a-ac77-638fdcb3939d', 'Stol', NULL, '2022-05-30 13:10:48', '2022-05-30 13:10:48'),
('903c74f6-1578-4f09-95e0-3b80c7988155', 'Pisarniska Miza', NULL, '2022-05-30 13:10:29', '2022-05-30 13:10:29'),
('9454d80d-88c6-47b9-9560-da9d5523a3bd', 'Monitor Mali', 'velikost 24 inch', '2022-05-30 13:06:04', '2022-05-30 13:08:55'),
('aaece969-3bd1-44c9-bc3c-752b4d6b4015', 'Macbook', 'prenosni racunalnik', '2022-05-30 13:04:57', '2022-05-30 13:04:57'),
('b20fcc9a-da66-4ccb-bc0f-dcc70d3d6aa8', 'Laptop Asus', 'prenosni racunalnik', '2022-05-30 13:01:59', '2022-05-30 13:01:59'),
('c276f1af-c5ec-4be6-a2d9-95481f3947eb', 'Laptop Dell', 'prenosni racunalnik', '2022-05-30 13:01:43', '2022-05-30 13:01:43'),
('c8c8c25c-93f3-48a8-8c33-9380ca44694d', 'Monitor Veliki', 'velikost 34 inch', '2022-05-30 13:07:03', '2022-05-30 13:09:17'),
('cf87334c-7a30-459a-8bb5-ba6765b26cef', 'Docking Station', 'Priklopna postaja', '2022-05-30 13:10:08', '2022-05-30 13:10:08'),
('e0752988-d361-4614-9f34-cd2d9812c529', 'Apple', 'tretretre', '2022-06-03 16:31:34', '2022-06-03 16:31:34'),
('fdea2ab4-9f20-4d18-a2ac-ec379087e4ab', 'Monitor Srednji', 'velikost 27 inch', '2022-05-30 13:06:34', '2022-05-30 13:09:07');

INSERT INTO `suppliers` (`id`, `name`, `phone`, `email`, `createdAt`, `updatedAt`) VALUES
('30ea9cff-617c-417b-9417-92ba97d150bd', 'Anja', '041567497', 'anja@gmail.com', '2022-05-30 15:54:18', '2022-05-30 15:55:03'),
('311fff50-56ae-4071-a4f2-2b4a3963d85f', 'Nik', '031497567', 'nik@gmail.com', '2022-05-30 15:53:46', '2022-05-30 15:53:46'),
('411159d8-3983-4ce1-9a97-e540d2396a54', 'Kirca', '123456789', 'eleonora.2001@yahoo.com', '2022-06-03 16:31:17', '2022-06-03 16:31:17'),
('44861006-c4db-4846-b4c9-d3c4e5d1bb01', 'Jure Trtnik', '031456789', 'jure.trtnik@student.um.si', '2022-05-30 15:42:22', '2022-05-30 15:42:22'),
('889850f6-8de3-4ade-86bf-8996b92e0f7e', 'Eleonora Loshkoska', '041654497', 'eleonora.loshkoska@student.um.si', '2022-05-30 15:47:01', '2022-05-30 15:47:01'),
('c729430b-f4ba-4b8d-b824-cb83ca712c44', 'Lan', '070445789', 'lan@gmail.com', '2022-05-30 15:54:55', '2022-05-30 15:54:55'),
('db3044d4-2df9-42a0-9156-9e8bf0a56a2a', 'Miha Mir', '070898980', 'miha.mir@student.um.si', '2022-05-30 15:47:45', '2022-05-30 15:47:57');

INSERT INTO `products` (`id`, `name`, `serijskaStevilka`, `stevilkaInventarja`, `datum`, `model`, `stanje`, `description`, `createdAt`, `updatedAt`, `categoryId`, `supplierId`) VALUES
('0f6de1b4-f116-40e1-bd91-1b0286042e77', 'Priklopnapostajanik', '887GJSJGH63', '887', '2022-05-12', 'HPHyperXPulsfire', 'V Skladišču', 'priklopna postaja za nika', '2022-06-06 12:29:09', '2022-06-06 12:29:09', 'cf87334c-7a30-459a-8bb5-ba6765b26cef', '311fff50-56ae-4071-a4f2-2b4a3963d85f'),
('34761429-105e-40a8-9dbc-c4552e8f1215', 'Laptopjure', '213RTLXDH32', '213', '2022-05-04', 'G770', 'V Skladišču', 'Laptop Jure', '2022-06-06 12:48:40', '2022-06-06 12:48:40', '3f07fd21-01c1-4b0b-9910-9e3954faedf0', '44861006-c4db-4846-b4c9-d3c4e5d1bb01'),
('39fd851b-0b56-40b3-a8c5-5f1de8af88bc', 'Eleonora2', '8u43975', '8t32858', '2022-06-03', 'lenovorehvj', 'V Skladišču', '348gh', '2022-06-03 16:43:58', '2022-06-03 16:43:58', 'e0752988-d361-4614-9f34-cd2d9812c529', NULL),
('457dad38-f73c-4919-9bbc-d720ef3fb72b', 'Mizamiha', '324JHDUDGUD23', '324', '2022-05-19', 'Yaasa', 'V Skladišču', 'Miza od Mihe', '2022-06-06 12:36:23', '2022-06-06 12:36:23', '903c74f6-1578-4f09-95e0-3b80c7988155', 'db3044d4-2df9-42a0-9156-9e8bf0a56a2a'),
('491be41f-ed03-45aa-92cf-c59288e6b8a7', 'Mizaeleonora', '566YCHXCHG32', '566', '2022-05-27', 'Yaasa', 'V Skladišču', 'Miza od Eleonore', '2022-06-06 12:35:15', '2022-06-06 12:35:15', '903c74f6-1578-4f09-95e0-3b80c7988155', '889850f6-8de3-4ade-86bf-8996b92e0f7e'),
('597a793c-8f21-4092-a2d9-6faa6972335d', 'Stoljure', '222KJGDHD76', '222', '2022-06-03', '309', 'V Skladišču', 'Stol od jureta', '2022-06-06 12:34:02', '2022-06-06 12:34:02', '6a752188-cc6f-4d8a-ac77-638fdcb3939d', '44861006-c4db-4846-b4c9-d3c4e5d1bb01'),
('6fa28002-f2ff-44c9-99b6-9e0e3033acdf', 'Monitorjure1', '497GJASDH67', '497', '2022-06-04', 'C27F390FH', 'V Skladišču', 'Bivsi monitor od jureta', '2022-06-06 12:44:14', '2022-06-06 12:44:14', 'c8c8c25c-93f3-48a8-8c33-9380ca44694d', NULL),
('71d9bcec-e5ab-40cb-b650-cbc2d2e18cbd', 'Eleonora Loshkoska', '123', '345', '2022-06-03', 'lenovo', 'V Uporabi', '123456789', '2022-06-03 16:32:04', '2022-06-03 16:32:04', 'e0752988-d361-4614-9f34-cd2d9812c529', '411159d8-3983-4ce1-9a97-e540d2396a54'),
('812b3e8b-88e1-426d-aa45-3193aeaf30f9', 'Mizajure', '889GJDGDHJ31', '889', '2022-04-15', 'Yaasa', 'V Skladišču', 'Miza od Jureta', '2022-06-06 12:37:32', '2022-06-06 12:37:32', '903c74f6-1578-4f09-95e0-3b80c7988155', '44861006-c4db-4846-b4c9-d3c4e5d1bb01'),
('89006ae1-e63f-4430-bc0b-a9b4b5864a75', 'Stolmiha', '454HKIUFV36', '454', '2022-06-06', '309', 'V Skladišču', 'pokvarjen stol od mihe', '2022-06-06 12:33:06', '2022-06-06 12:33:06', '6a752188-cc6f-4d8a-ac77-638fdcb3939d', NULL),
('8b7a0742-e451-4857-a6f4-7f44c76cf78c', 'Monitormiha1', '678SAHGD98', '678', '2022-06-04', 'C24RG50FQR', 'V Skladišču', 'Monitor od Mihe', '2022-06-06 12:41:42', '2022-06-06 12:41:42', 'fdea2ab4-9f20-4d18-a2ac-ec379087e4ab', 'db3044d4-2df9-42a0-9156-9e8bf0a56a2a'),
('a9a39f77-6129-4cc3-8539-439a88a3ee6e', 'Monitorjure2', '489UIOTJH49', '489', '2022-06-04', 'C27F390FH', 'V Skladišču', 'Monitor veliki', '2022-06-06 12:43:12', '2022-06-06 12:43:12', 'c8c8c25c-93f3-48a8-8c33-9380ca44694d', '44861006-c4db-4846-b4c9-d3c4e5d1bb01'),
('b95226a9-bfff-44f3-91a9-6ba672e347e0', 'Monitormiha2', '223GJADJH76', '223', '2022-06-06', 'C24RG50FQR', 'V Skladišču', 'Monitor srednji od Mihe', '2022-06-06 12:40:30', '2022-06-06 12:40:44', 'fdea2ab4-9f20-4d18-a2ac-ec379087e4ab', 'db3044d4-2df9-42a0-9156-9e8bf0a56a2a'),
('bd5a562e-fe9c-48a9-bace-3c4301d40182', 'Priklopnapostajaanja', '789GJASDKJ67', '789', '2022-06-04', 'HPHyperXPulsfire', 'V Skladišču', 'Pokvarjena postaja od anje', '2022-06-06 12:30:54', '2022-06-06 12:30:54', 'cf87334c-7a30-459a-8bb5-ba6765b26cef', '30ea9cff-617c-417b-9417-92ba97d150bd'),
('bee7bd81-c854-4d1f-9e38-e65d93087b73', 'Stoleleonora', '999HJDGHF677', '999', '2022-04-08', '309', 'V Skladišču', 'stol od Eleonore', '2022-06-06 12:32:09', '2022-06-06 12:32:09', '6a752188-cc6f-4d8a-ac77-638fdcb3939d', '889850f6-8de3-4ade-86bf-8996b92e0f7e'),
('cb64b7af-3591-463b-a3e2-d35d01035b31', 'Laptopmiha', '662HJDK789', '662', '2022-05-02', 'MacBookPro', 'V Skladišču', 'Laptop od Mihe', '2022-06-06 12:45:59', '2022-06-06 12:45:59', 'aaece969-3bd1-44c9-bc3c-752b4d6b4015', 'db3044d4-2df9-42a0-9156-9e8bf0a56a2a'),
('e088a986-5d2b-4d51-85e7-0e6b6acfb559', 'Laptopeleonora', '334TTZJHHJ23', '334', '2022-03-03', 'IdeaPad', 'V Skladišču', 'LaptopEleonora', '2022-06-06 12:47:09', '2022-06-06 12:47:09', '3f07fd21-01c1-4b0b-9910-9e3954faedf0', '889850f6-8de3-4ade-86bf-8996b92e0f7e'),
('ec27d3b9-c225-43b9-86e0-5cf4d86f00aa', 'Monitoreleonora', '123OIIUO387', '123', '2022-06-10', 'C45JKDHF34', 'V Skladišču', 'Monitor mali od Eleonore', '2022-06-06 12:39:11', '2022-06-06 12:39:11', '9454d80d-88c6-47b9-9560-da9d5523a3bd', '889850f6-8de3-4ade-86bf-8996b92e0f7e');



