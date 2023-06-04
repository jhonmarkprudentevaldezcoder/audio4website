import LineDivider from 'components/atoms/LineDivider';
import Text from 'components/atoms/Text';
import PageSentence from 'components/molecules/PageSentence';
import PageTemplate from 'components/templates/PageTemplate';
import React from 'react';

const TermOfService = () => {
  return (
    <PageTemplate>
      <section className="space-y-6 text-center" data-aos="zoom-in-up">
        <PageSentence badge="PAGE" title={`Terms & Conditions`} />
        <Text textStyle="BlogMeta" value="Updated at 06-04-2023" />
      </section>
      <LineDivider />
      <section className="grid place-items-center" data-aos="fade-up">
        <div className="w-full sm:w-10/12 md:w-8/12 space-y-10">
          <Text
            textStyle="PageContent"
            value={`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Tellus in hac habitasse platea dictumst. Donec ultrices tincidunt arcu non sodales. Morbi tincidunt augue interdum velit euismod in pellentesque. Integer malesuada nunc vel risus commodo viverra maecenas. Quis lectus nulla at volutpat diam ut venenatis tellus. Ut sem viverra aliquet eget. Nisl tincidunt eget nullam non nisi. Vitae sapien pellentesque habitant morbi tristique senectus et. Hendrerit dolor magna eget est lorem ipsum dolor sit. Ac placerat vestibulum lectus mauris. Vulputate dignissim suspendisse in est ante in nibh mauris. Eget nullam non nisi est sit amet facilisis. Diam ut venenatis tellus in metus vulputate eu scelerisque. Ultricies tristique nulla aliquet enim tortor.
              <br> <br>
              Dictumst vestibulum rhoncus est pellentesque elit. Nisi lacus sed viverra tellus. Amet mauris commodo quis imperdiet massa tincidunt. Tristique senectus et netus et malesuada fames ac turpis. Nisi porta lorem mollis aliquam ut porttitor leo. Lorem donec massa sapien faucibus et molestie ac. Gravida arcu ac tortor dignissim. Morbi tristique senectus et netus et malesuada fames. Quis vel eros donec ac odio tempor orci. Et netus et malesuada fames ac. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquet bibendum enim facilisis gravida neque convallis a.
              <br> <br>
              Tincidunt lobortis feugiat vivamus at augue eget arcu. Enim sit amet venenatis urna cursus eget nunc. Gravida neque convallis a cras semper auctor neque vitae. Nunc pulvinar sapien et ligula ullamcorper malesuada. Vel eros donec ac odio tempor orci dapibus ultrices.
              `}
          />
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="License" />
            <Text
              textStyle="PageContent"
              value={`
              Facilisis leo vel fringilla est ullamcorper eget nulla. Quam nulla porttitor massa id neque aliquam. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper.
              <br> <br>
              Facilisi morbi tempus iaculis urna. Turpis massa sed elementum tempus egestas sed sed risus pretium. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. In fermentum posuere urna nec tincidunt praesent semper feugiat. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Neque laoreet suspendisse interdum consectetur. Blandit aliquam etiam erat velit scelerisque. Sodales ut etiam sit amet nisl. Lacus vestibulum sed arcu non.
              `}
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default TermOfService;
