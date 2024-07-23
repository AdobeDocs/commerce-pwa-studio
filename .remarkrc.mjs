import remarkHeadingId from 'remark-heading-id';
import remarkValidateLinks from 'remark-validate-links';
import remarkFrontmatter from 'remark-frontmatter';
import remarkLintFrontmatterSchema from 'remark-lint-frontmatter-schema';
import remarkLintNoDeadUrls from 'remark-lint-no-dead-urls';

const remarkConfig = {
	plugins: [
		remarkHeadingId,
		remarkValidateLinks,
		remarkFrontmatter,
		[
			remarkLintFrontmatterSchema,
			{
				schemas: {
					/* One schema for many files */
					'./.github/linters/metadata.schema.yml': [
						/* Support glob patterns ———v */
						'./src/pages/**/*.md',
					],
				},
			},
		],
		[
			remarkLintNoDeadUrls,
			{
				skipUrlPatterns: [
					// 'https://www.php.net',
					// 'https://business.adobe.com',
					// 'https://magento.com',
					// 'https://www.adobe.com'
				]
			}
		]
	],
};
export default remarkConfig;
