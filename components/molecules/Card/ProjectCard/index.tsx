import Button from 'components/atoms/Button';
import ButtonLink from 'components/atoms/Button/ButtonLink';
import LazyCard, { LazyCardProps } from 'components/atoms/LazyCard';
import Text from 'components/atoms/Text';
import Image from 'next/image';

interface ProjectCardProps extends LazyCardProps {
  title: string;
  description: string;
  image: string;
}
const ProjectCard = ({
  title,
  description,
  bottomSquareSize = 'small',
  height = 450,
  image,
}: ProjectCardProps) => {
  return (
    <div className="w-full">
      {/*  <LazyCard bottomSquareSize={bottomSquareSize} height={height} /> */}
      <Image src={image} alt={title} width={300} height={300} />
      <div className="flex flex-col place-items-center text-center mt-10">
        <div className="mb-2.5">
          <Text value={title} textStyle="ProjectTitle" />
        </div>
        <div className="mb-9">
          <Text value={description} textStyle="ProjectDescription" />
        </div>
        <div className="">
          <ButtonLink
            value="Detail"
            color="white"
            radius="pill"
            style="outline"
            href="/project/detail"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
