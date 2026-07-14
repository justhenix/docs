import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../mdx-components";
import { notFound } from "next/navigation";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props: PageProps<"/[[...mdxPath]]">) {
  const params = await props.params;
  try {
    const { metadata } = await importPage(params.mdxPath ?? []);
    return metadata;
  } catch {
    return {};
  }
}

const Wrapper = getMDXComponents({}).wrapper;

export default async function Page(props: PageProps<"/[[...mdxPath]]">) {
  const params = await props.params;
  let page;
  try {
    page = await importPage(params.mdxPath ?? []);
  } catch {
    notFound();
  }
  const { default: MDXContent, metadata, sourceCode, toc } = page;

  return (
    <Wrapper metadata={metadata} sourceCode={sourceCode} toc={toc}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
