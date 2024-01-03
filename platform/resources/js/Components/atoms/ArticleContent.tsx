import React, { useMemo } from 'react';
import DOMPurify from 'dompurify';

type Props = {
	content: string;
};

const ArticleContent = ({ content }: Props) => {
	const cleanContent = useMemo(() => {
		return DOMPurify.sanitize(content, {
			USE_PROFILES: { html: true, svg: true },
		});
	}, [content]);

	return <span dangerouslySetInnerHTML={{ __html: cleanContent }} />;
};

export default ArticleContent;
